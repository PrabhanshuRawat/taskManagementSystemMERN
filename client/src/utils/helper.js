import { format, parseISO } from 'date-fns';

// Format a date string
export const formatDate = (dateString) => {
  const date = parseISO(dateString);
  return format(date, 'MMM d, yyyy');
};

// Get the current date
export const getCurrentDate = () => {
  const date = new Date();
  return format(date, 'yyyy-MM-dd');
};

// Validate email
export const validateEmail = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

// Validate password
export const validatePassword = (password) => {
  // Add your password validation logic here
  return password.length >= 6;
};
