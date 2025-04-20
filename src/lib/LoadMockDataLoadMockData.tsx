'use client';

import { useStore } from '@/hooks/useJobStore';
import { useEffect } from 'react';
import { mockJobs } from '../../data/dummyData';

export const LoadMockData = () => {
  const setJobs = useStore((state) => state.setJobs);

  useEffect(() => {
    setJobs(mockJobs);
  }, [setJobs]);

  return null;
};
