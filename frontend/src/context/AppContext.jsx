import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialProjects, initialTestimonials, initialClients } from '../data/initialData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem('genrev_projects_v2') || localStorage.getItem('genrev_projects');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= initialProjects.length) return parsed;
      }
      return initialProjects;
    } catch (e) {
      return initialProjects;
    }
  });

  const [testimonials, setTestimonials] = useState(() => {
    try {
      const saved = localStorage.getItem('genrev_testimonials');
      return saved ? JSON.parse(saved) : initialTestimonials;
    } catch (e) {
      return initialTestimonials;
    }
  });

  const [clients, setClients] = useState(() => {
    try {
      const saved = localStorage.getItem('genrev_clients_v2') || localStorage.getItem('genrev_clients');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= initialClients.length) return parsed;
      }
      return initialClients;
    } catch (e) {
      return initialClients;
    }
  });

  const [contacts, setContacts] = useState(() => {
    try {
      const saved = localStorage.getItem('genrev_contacts');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    document.documentElement.classList.remove('light-theme');
    document.documentElement.classList.add('dark');
  }, []);

  // Fetch all live data from backend API if available
  const fetchData = async () => {
    setLoading(true);
    try {
      const [projRes, testRes, clientRes] = await Promise.all([
        fetch('/api/projects').then(r => (r.ok ? r.json() : null)).catch(() => null),
        fetch('/api/testimonials').then(r => (r.ok ? r.json() : null)).catch(() => null),
        fetch('/api/clients').then(r => (r.ok ? r.json() : null)).catch(() => null)
      ]);

      if (Array.isArray(projRes) && projRes.length > 0) {
        setProjects(projRes);
        localStorage.setItem('genrev_projects', JSON.stringify(projRes));
      }
      if (Array.isArray(testRes) && testRes.length > 0) {
        setTestimonials(testRes);
        localStorage.setItem('genrev_testimonials', JSON.stringify(testRes));
      }
      if (Array.isArray(clientRes) && clientRes.length > 0) {
        setClients(clientRes);
        localStorage.setItem('genrev_clients', JSON.stringify(clientRes));
      }
    } catch (err) {
      // Gracefully continue with local storage data
    } finally {
      setLoading(false);
    }
  };

  // Fetch admin contacts
  const fetchContacts = async () => {
    try {
      const res = await fetch('/api/contacts');
      if (res.ok) {
        const data = await res.json();
        setContacts(data);
        localStorage.setItem('genrev_contacts', JSON.stringify(data));
      }
    } catch (err) {
      // Fallback to local storage
      const saved = localStorage.getItem('genrev_contacts');
      if (saved) setContacts(JSON.parse(saved));
    }
  };

  // Submit contact form
  const submitContact = async (formData) => {
    const newEntry = {
      _id: 'inq_' + Date.now(),
      createdAt: new Date().toISOString(),
      ...formData,
      status: 'New'
    };

    // Save to local storage state first
    setContacts(prev => {
      const updated = [newEntry, ...prev];
      localStorage.setItem('genrev_contacts', JSON.stringify(updated));
      return updated;
    });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        fetchContacts();
      }
    } catch (err) {
      // Silently succeed locally
    }

    return { 
      success: true, 
      message: 'Thank you! Your inquiry has been received. A senior principal architect will contact you within 24 hours.' 
    };
  };

  // Add Project
  const addProject = async (projectData) => {
    const newEntry = {
      _id: 'proj_' + Date.now(),
      createdAt: new Date().toISOString(),
      ...projectData
    };

    setProjects(prev => {
      const updated = [newEntry, ...prev];
      localStorage.setItem('genrev_projects', JSON.stringify(updated));
      return updated;
    });

    try {
      await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData)
      });
    } catch (e) {}

    return { success: true };
  };

  // Delete Project
  const deleteProject = async (id) => {
    setProjects(prev => {
      const updated = prev.filter(p => p._id !== id && p.id !== id);
      localStorage.setItem('genrev_projects', JSON.stringify(updated));
      return updated;
    });

    try {
      await fetch(`/api/projects/${id}`, { method: 'DELETE' });
    } catch (e) {}

    return { success: true };
  };

  useEffect(() => {
    fetchData();
    fetchContacts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        projects,
        testimonials,
        clients,
        contacts,
        loading,
        selectedProject,
        setSelectedProject,
        activeSlide,
        setActiveSlide,
        submitContact,
        addProject,
        deleteProject,
        fetchContacts,
        refreshData: fetchData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
