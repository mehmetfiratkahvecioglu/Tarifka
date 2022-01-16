import React from 'react';
import Router from './Router';
import AuthProvider from './context/AuthProvider';

export default function Wrapper() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
