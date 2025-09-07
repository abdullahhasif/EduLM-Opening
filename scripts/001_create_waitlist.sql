-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public waitlist)
CREATE POLICY "Allow public to insert waitlist entries" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading all entries (for admin purposes)
CREATE POLICY "Allow public to read waitlist entries" 
ON public.waitlist 
FOR SELECT 
USING (true);
