// src/components/onboarding/degree-program/Profile.tsx

// This component renders the profile setup page for degree program students

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Button } from '@/components/ui/forms/button';
import { Input } from '@/components/ui/forms/input';
import { Label } from '@/components/ui/forms/label';

const Profile: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, bio }),
      });

      if (!response.ok) {
        throw new Error('Failed to save profile');
      }

      toast({
        title: 'Profile saved',
        description: 'Your profile information has been saved successfully.',
      });

      // Redirect to the next step in the onboarding process
      router.push('/onboarding/next-step');
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="bio">Bio</Label>
        <Input
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Save Profile</Button>
    </form>
  );
};

export default Profile;
