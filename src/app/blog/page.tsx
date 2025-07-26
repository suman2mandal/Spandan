'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBlog } from '@/redux/slices/blogSlice';
import { RootState } from '@/redux/store';
import HydrationComponent from './hydration-client';
import axios from 'axios';
import type { Law } from '@/types/law'; // ✅ use centralized type


export default function AnimalLawsPage() {
  const dispatch = useDispatch();
  const blogs = useSelector((state: RootState) => state.blog.post);

  useEffect(() => {
    const fetchLaws = async () => {
      try {
        if (blogs.length > 0) return; // ✅ Already fetched, don't fetch again
        const res = await axios.get('/api/blog/getBlog');
        const data: Law[] = res.data;
        dispatch(setBlog(data));
      } catch (err) {
        console.error('Failed to fetch laws:', err);
      }
    };

    fetchLaws();
  }, [dispatch, blogs]);
  
  if (!blogs || blogs.length === 0) return <>No Law currently available!!</>;

  return <HydrationComponent blogs={blogs} />
}