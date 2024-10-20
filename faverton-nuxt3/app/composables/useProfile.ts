import type { UserProfile } from '~/types/profile';

export function useProfile() {
  const profile = ref<UserProfile | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchProfile = async () => {
    loading.value = true;
    error.value = null;

    try {
      const data = await $fetch(`/api/profile`);

      profile.value = data as UserProfile;
    }
    catch (e) {
      error.value = e instanceof Error ? e.message : `Une erreur est survenue`;
      console.error(`Error fetching profile:`, e);
    }
    finally {
      loading.value = false;
    }
  };

  return {
    profile,
    loading,
    error,
    fetchProfile,
  };
}
