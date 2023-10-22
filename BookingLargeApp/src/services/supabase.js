import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rueikcdrkcjvuqzgxbdv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1ZWlrY2Rya2NqdnVxemd4YmR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MzMyMjQsImV4cCI6MjAxMzQwOTIyNH0.phvqFo9FkEskI4MB00wfB8XSMpnM59ghD1L6Nh28R_Q';
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;