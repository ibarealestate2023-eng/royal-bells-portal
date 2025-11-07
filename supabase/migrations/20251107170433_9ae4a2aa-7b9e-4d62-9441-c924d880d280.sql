-- Create events table
CREATE TABLE IF NOT EXISTS public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE,
  time TEXT,
  location TEXT,
  category TEXT NOT NULL CHECK (category IN ('primary', 'secondary', 'nursery', 'general')),
  event_type TEXT NOT NULL CHECK (event_type IN ('academic', 'sports', 'cultural', 'social', 'graduation', 'other')),
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create gallery_images table for storing uploaded images
CREATE TABLE IF NOT EXISTS public.gallery_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  gallery_id TEXT NOT NULL,
  section TEXT NOT NULL CHECK (section IN ('primary', 'secondary', 'nursery')),
  image_url TEXT NOT NULL,
  caption TEXT,
  uploaded_by UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- RLS policies for events (publicly readable)
CREATE POLICY "Events are viewable by everyone"
ON public.events FOR SELECT
USING (true);

-- RLS policies for gallery_images (publicly readable)
CREATE POLICY "Gallery images are viewable by everyone"
ON public.gallery_images FOR SELECT
USING (true);

-- Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'gallery-images',
  'gallery-images',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
) ON CONFLICT (id) DO NOTHING;

-- Storage policies for gallery images (public read)
CREATE POLICY "Gallery images are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'gallery-images');

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Trigger for events updated_at
CREATE TRIGGER update_events_updated_at
BEFORE UPDATE ON public.events
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample events
INSERT INTO public.events (title, description, event_date, end_date, time, location, category, event_type, is_featured) VALUES
('Parent-Teacher Conferences', 'Individual meetings to discuss student progress and development', '2025-03-15', '2025-03-16', '9:00 AM - 5:00 PM', 'Primary School Classrooms', 'primary', 'academic', true),
('Spring Concert', 'Primary students showcase their musical talents', '2025-03-22', NULL, '6:00 PM', 'School Auditorium', 'primary', 'cultural', true),
('Science Fair', 'Students present their science projects and experiments', '2025-04-05', NULL, '10:00 AM - 2:00 PM', 'Primary Multipurpose Hall', 'primary', 'academic', true),
('Sports Day', 'Annual athletics competition with various track and field events', '2025-04-19', NULL, '8:00 AM - 3:00 PM', 'School Sports Field', 'primary', 'sports', true),
('Cultural Day Celebration', 'Celebrating diversity through food, music, and traditional dress', '2025-05-10', NULL, '11:00 AM - 2:00 PM', 'School Grounds', 'primary', 'cultural', true),
('Mock Exams', 'Practice examinations for secondary students', '2025-03-10', '2025-03-14', 'All Day', 'Examination Halls', 'secondary', 'academic', true),
('Inter-School Debate', 'Debate competition with neighboring schools', '2025-05-08', NULL, '2:00 PM - 5:00 PM', 'School Auditorium', 'secondary', 'academic', true),
('Graduation Ceremony', 'Celebrating our graduating secondary students', '2025-06-20', NULL, '10:00 AM', 'Main Hall', 'secondary', 'graduation', true),
('Nursery Open Day', 'Visit our nursery facilities and meet our staff', '2025-03-25', NULL, '9:00 AM - 12:00 PM', 'Nursery Building', 'nursery', 'other', true),
('Easter Celebration', 'Easter egg hunt and activities for nursery children', '2025-04-17', NULL, '10:00 AM - 1:00 PM', 'Nursery Playground', 'nursery', 'cultural', false);