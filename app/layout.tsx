import React from 'react';
import JotaiProvider from './JotaiProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <JotaiProvider>{children}</JotaiProvider>;
}
