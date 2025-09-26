"use client";

import { useEffect, useState } from "react";

export interface SocialLink {
  _id: string;
  platform: string;
  url: string;
  icon: string;
  iconLibrary: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

interface UseSocialLinksReturn {
  socialLinks: SocialLink[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const mockSocialLinks: SocialLink[] = [
  {
    _id: "1",
    platform: "GitHub",
    url: "https://github.com/tuanpham197",
    icon: "github",
    iconLibrary: "fontawesome",
    isActive: true,
    order: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/tuankrn197/",
    icon: "linkedin",
    iconLibrary: "fontawesome",
    isActive: true,
    order: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "3",
    platform: "Email Me",
    url: "mailto:vantuankrn197@gmail.com",
    icon: "envelope",
    iconLibrary: "fontawesome",
    isActive: true,
    order: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function useSocialLinks(
  activeOnly: boolean = true
): UseSocialLinksReturn {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSocialLinks = async () => {
    try {
      setLoading(true);
      setError(null);

      const links = activeOnly
        ? mockSocialLinks.filter((link) => link.isActive)
        : mockSocialLinks;

      await new Promise((resolve) => setTimeout(resolve, 300));

      setSocialLinks(links);
    } catch {
      setError("Failed to load social links");
      setSocialLinks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSocialLinks();
  }, [activeOnly]);

  return {
    socialLinks,
    loading,
    error,
    refetch: fetchSocialLinks,
  };
}
