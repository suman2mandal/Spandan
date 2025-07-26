'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLaws } from '@/redux/slices/animalLawSlice';
import { RootState } from '@/redux/store';
import HydrationComponent from './hydration-client';
import axios from 'axios';
import type { Law } from '@/types/law'; // ✅ use centralized type


export default function AnimalLawsPage() {
  const dispatch = useDispatch();
  const laws = useSelector((state: RootState) => state.animalLaw.laws);

  useEffect(() => {
    const fetchLaws = async () => {
      try {
        if (laws.length > 0) return; // ✅ Already fetched, don't fetch again

        const res = await axios.get('/api/animal-law');
        const data: Law[] = res.data;
        dispatch(setLaws(data));
      } catch (err) {
        console.error('Failed to fetch laws:', err);
      }
    };

    fetchLaws();
  }, [dispatch, laws]);
  
  if (!laws || laws.length === 0) return <>No Law currently available!!</>;

  return <HydrationComponent laws={laws} />
}