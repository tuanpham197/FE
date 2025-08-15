"use client";

import { projectsData, type Project } from "@/data";
import { useCallback, useEffect, useState } from "react";

// Re-export Project type for convenience
export type { Project };

interface UseProjectsReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

interface UseProjectsOptions {
  status?: "Draft" | "Published" | "Archived";
  featured?: boolean;
  projectType?: string;
  publishedOnly?: boolean;
}

export function useProjects(
  options: UseProjectsOptions = {}
): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Simulate loading delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 300));

      let filteredData = [...projectsData];

      // Apply filters
      if (options.publishedOnly !== false) {
        filteredData = filteredData.filter(
          (project) => project.status === "Published"
        );
      } else if (options.status) {
        filteredData = filteredData.filter(
          (project) => project.status === options.status
        );
      }

      if (options.featured !== undefined) {
        filteredData = filteredData.filter(
          (project) => project.featured === options.featured
        );
      }

      if (options.projectType) {
        filteredData = filteredData.filter(
          (project) => project.projectType === options.projectType
        );
      }

      // Sort by creation date (newest first)
      filteredData.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setProjects(filteredData);
    } catch (err) {
      console.error("Error loading projects:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
      setProjects([]);
    } finally {
      setLoading(false);
    }
  }, [
    options.status,
    options.featured,
    options.projectType,
    options.publishedOnly,
  ]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects,
  };
}

// Helper hook for featured projects only
export function useFeaturedProjects(): UseProjectsReturn {
  return useProjects({ featured: true, publishedOnly: true });
}

// Helper hook for projects by type
export function useProjectsByType(projectType: string): UseProjectsReturn {
  return useProjects({ projectType, publishedOnly: true });
}
