import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Fetch all initial data
  const fetchData = async () => {
    try {
      const [projRes, testRes, clientRes] = await Promise.all([
        fetch('/api/projects').then(r => r.json()).catch(() => []),
        fetch('/api/testimonials').then(r => r.json()).catch(() => []),
        fetch('/api/clients').then(r => r.json()).catch(() => [])
      ]);

      if (Array.isArray(projRes) && projRes.length > 0) setProjects(projRes);
      if (Array.isArray(testRes) && testRes.length > 0) setTestimonials(testRes);
      if (Array.isArray(clientRes) && clientRes.length > 0) setClients(clientRes);
    } catch (err) {
      console.warn('Using local client state fallback:', err);
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
      }
    } catch (err) {
      console.error('Failed to load inquiries:', err);
    }
  };

  // Submit contact form
  const submitContact = async (formData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await res.json();
      if (res.ok) {
        fetchContacts();
        return { success: true, message: result.message || 'Inquiry submitted successfully!' };
      }
      return { success: false, error: result.error || 'Submission failed' };
    } catch (err) {
      return { success: false, error: 'Network error occurred. Please try again.' };
    }
  };

  // Add Project
  const addProject = async (projectData) => {
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData)
      });
      if (res.ok) {
        await fetchData();
        return { success: true };
      }
      return { success: false };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Delete Project
  const deleteProject = async (id) => {
    try {
      const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProjects(prev => prev.filter(p => p._id !== id && p.id !== id));
        return { success: true };
      }
      return { success: false };
    } catch (err) {
      return { success: false };
    }
  };

  useEffect(() => {
    fetchData();
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
        isAdminOpen,
        setIsAdminOpen,
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
