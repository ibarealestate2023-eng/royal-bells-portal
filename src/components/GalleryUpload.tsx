import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X, ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface GalleryUploadProps {
  galleryId: string;
  section: "primary" | "secondary" | "nursery";
  onUploadComplete?: () => void;
}

const GalleryUpload = ({ galleryId, section, onUploadComplete }: GalleryUploadProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [caption, setCaption] = useState("");
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter((file) => {
      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a valid image file`,
          variant: "destructive",
        });
        return false;
      }

      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds 5MB limit`,
          variant: "destructive",
        });
        return false;
      }

      return true;
    });

    setSelectedFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one image to upload",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    try {
      for (const file of selectedFiles) {
        // Upload to storage
        const fileExt = file.name.split(".").pop();
        const fileName = `${galleryId}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from("gallery-images")
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from("gallery-images")
          .getPublicUrl(fileName);

        // Save to database
        const { error: dbError } = await supabase
          .from("gallery_images")
          .insert({
            gallery_id: galleryId,
            section,
            image_url: publicUrl,
            caption: caption || null,
          });

        if (dbError) throw dbError;
      }

      toast({
        title: "Upload successful",
        description: `${selectedFiles.length} image(s) uploaded successfully`,
      });

      setSelectedFiles([]);
      setCaption("");
      onUploadComplete?.();
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your images",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">Upload Images</h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="images">Select Images (Max 5MB each)</Label>
          <div className="mt-2">
            <label
              htmlFor="images"
              className="flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
            >
              <div className="text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to select images
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  JPG, PNG, WEBP (Max 5MB)
                </p>
              </div>
              <Input
                id="images"
                type="file"
                multiple
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={handleFileSelect}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {selectedFiles.length > 0 && (
          <div>
            <Label>Selected Images ({selectedFiles.length})</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              {selectedFiles.map((file, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="absolute top-2 right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-muted-foreground mt-1 truncate">
                    {file.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <Label htmlFor="caption">Caption (Optional)</Label>
          <Input
            id="caption"
            placeholder="Add a caption for these images"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>

        <Button
          onClick={handleUpload}
          disabled={uploading || selectedFiles.length === 0}
          className="w-full"
        >
          {uploading ? "Uploading..." : `Upload ${selectedFiles.length} Image(s)`}
        </Button>
      </div>
    </Card>
  );
};

export default GalleryUpload;
