import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  PlusCircle, 
  FolderPlus, 
  MessageSquare, 
  Trash2, 
  ExternalLink, 
  CheckCircle2, 
  RefreshCw,
  Database,
  Layers
} from 'lucide-react';

export default function AdminModal() {
  const { 
    isAdminOpen, 
    setIsAdminOpen, 
    projects, 
    contacts, 
    fetchContacts, 
    addProject, 
    deleteProject 
  } = useApp();

  const [activeTab, setActiveTab] = useState('inquiries'); // 'inquiries', 'addProject', 'projects'
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  // Form state for adding project
  const [newProject, setNewProject] = useState({
    title: '',
    subtitle: '',
    category: 'Residential',
    description: '',
    detailedText: '',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'],
    imageUrlInput: '',
    location: 'South Mumbai',
    year: 2026,
    area: '5,200 sq.ft'
  });

  useEffect(() => {
    if (isAdminOpen) {
      fetchContacts();
    }
  }, [isAdminOpen]);

  if (!isAdminOpen) return null;

  const handleAddProjectSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg('');

    // Prepare images array
    const imageList = newProject.imageUrlInput.trim() 
      ? [newProject.imageUrlInput.trim(), ...newProject.images]
      : newProject.images;

    const payload = {
      title: newProject.title,
      subtitle: newProject.subtitle,
      category: newProject.category,
      description: newProject.description,
      detailedText: newProject.detailedText || newProject.description,
      images: imageList,
      location: newProject.location,
      year: Number(newProject.year),
      area: newProject.area,
      featured: true
    };

    const res = await addProject(payload);
    setSubmitting(false);

    if (res.success) {
      setStatusMsg('Project published successfully to MongoDB / Backend API!');
      setNewProject({
        title: '',
        subtitle: '',
        category: 'Residential',
        description: '',
        detailedText: '',
        images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'],
        imageUrlInput: '',
        location: 'South Mumbai',
        year: 2026,
        area: '5,200 sq.ft'
      });
      setTimeout(() => setActiveTab('projects'), 1200);
    } else {
      setStatusMsg('Failed to save project. Check backend logs.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#141519] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#111215]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#C5A880]/20 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold tracking-wider uppercase font-mono-num">
                GENREV INTERIO CMS • LIVE API CONSOLE
              </h2>
              <p className="text-xs text-neutral-400 font-mono-num">
                Connected to Node/Express + MongoDB Data Layer
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-white/10 bg-[#16171D] px-6">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`py-3.5 px-4 text-xs font-mono-num uppercase tracking-wider flex items-center gap-2 border-b-2 transition ${
              activeTab === 'inquiries'
                ? 'border-[#C5A880] text-[#C5A880] font-bold'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Client Inquiries ({contacts.length})
          </button>

          <button
            onClick={() => setActiveTab('addProject')}
            className={`py-3.5 px-4 text-xs font-mono-num uppercase tracking-wider flex items-center gap-2 border-b-2 transition ${
              activeTab === 'addProject'
                ? 'border-[#C5A880] text-[#C5A880] font-bold'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <FolderPlus className="w-4 h-4" />
            Publish New Project
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`py-3.5 px-4 text-xs font-mono-num uppercase tracking-wider flex items-center gap-2 border-b-2 transition ${
              activeTab === 'projects'
                ? 'border-[#C5A880] text-[#C5A880] font-bold'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            Manage Projects ({projects.length})
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* TAB 1: CLIENT INQUIRIES */}
          {activeTab === 'inquiries' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono-num">
                  Realtime inquiries from website contact form
                </span>
                <button
                  onClick={fetchContacts}
                  className="px-3 py-1 text-xs rounded bg-white/5 hover:bg-white/10 text-neutral-300 flex items-center gap-1 font-mono-num"
                >
                  <RefreshCw className="w-3 h-3" /> Refresh
                </button>
              </div>

              {contacts.length === 0 ? (
                <div className="p-12 text-center text-neutral-500 border border-dashed border-white/10 rounded-xl">
                  <MessageSquare className="w-8 h-8 mx-auto mb-2 text-neutral-600" />
                  <p className="text-xs font-mono-num">No inquiries received yet.</p>
                  <p className="text-[11px] text-neutral-600 mt-1">
                    Fill the "Get in Touch" form on the website to test live submission!
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {contacts.map((c) => (
                    <div
                      key={c._id || c.id}
                      className="p-4 rounded-xl bg-[#181920] border border-white/5 hover:border-white/10 transition flex flex-col sm:flex-row justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{c.name}</span>
                          <span className="text-xs text-neutral-400 font-mono-num">({c.email})</span>
                          {c.phone && (
                            <span className="text-xs text-[#C5A880] font-mono-num">• {c.phone}</span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                          "{c.message}"
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] font-mono-num text-neutral-400">
                          <span className="px-2 py-0.5 rounded bg-white/5 text-[#C5A880]">
                            {c.service}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-white/5">
                            Budget: {c.budget}
                          </span>
                          {c.company && (
                            <span className="px-2 py-0.5 rounded bg-white/5">
                              {c.company}
                            </span>
                          )}
                          <span className="text-neutral-500">
                            {new Date(c.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-center">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-num uppercase bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                          {c.status || 'New Lead'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: PUBLISH NEW PROJECT */}
          {activeTab === 'addProject' && (
            <form onSubmit={handleAddProjectSubmit} className="space-y-4 max-w-3xl">
              {statusMsg && (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{statusMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-num uppercase text-neutral-400 mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. The Elysium Residence"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#111215] border border-white/10 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-num uppercase text-neutral-400 mb-1">
                    Category *
                  </label>
                  <select
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#111215] border border-white/10 text-xs text-white"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Turnkey Interiors">Turnkey Interiors</option>
                    <option value="Architecture">Architecture</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-num uppercase text-neutral-400 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={newProject.location}
                    onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#111215] border border-white/10 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-num uppercase text-neutral-400 mb-1">
                    Year
                  </label>
                  <input
                    type="number"
                    value={newProject.year}
                    onChange={(e) => setNewProject({ ...newProject, year: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#111215] border border-white/10 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-num uppercase text-neutral-400 mb-1">
                    Area (sq.ft)
                  </label>
                  <input
                    type="text"
                    value={newProject.area}
                    onChange={(e) => setNewProject({ ...newProject, area: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#111215] border border-white/10 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono-num uppercase text-neutral-400 mb-1">
                  Primary Image URL (Cloudinary / Unsplash)
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={newProject.imageUrlInput}
                  onChange={(e) => setNewProject({ ...newProject, imageUrlInput: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-[#111215] border border-white/10 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-num uppercase text-neutral-400 mb-1">
                  Short Editorial Description *
                </label>
                <textarea
                  required
                  rows={2}
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  placeholder="Summary for project card..."
                  className="w-full px-3 py-2 rounded bg-[#111215] border border-white/10 text-xs text-white resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-num uppercase text-neutral-400 mb-1">
                  Detailed Architectural Narrative
                </label>
                <textarea
                  rows={3}
                  value={newProject.detailedText}
                  onChange={(e) => setNewProject({ ...newProject, detailedText: e.target.value })}
                  placeholder="In-depth design philosophy and materials used..."
                  className="w-full px-3 py-2 rounded bg-[#111215] border border-white/10 text-xs text-white resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2.5 rounded-lg bg-[#C5A880] hover:bg-[#DFC49F] text-black font-semibold text-xs tracking-wider uppercase transition flex items-center gap-2"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>{submitting ? 'SAVING TO DATABASE...' : 'SAVE & PUBLISH PROJECT'}</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: MANAGE PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono-num block mb-2">
                All database projects currently live on frontend
              </span>

              {projects.map((p) => (
                <div
                  key={p._id || p.id}
                  className="p-4 rounded-xl bg-[#181920] border border-white/5 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={p.images && p.images[0] ? p.images[0] : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80'}
                      alt={p.title}
                      className="w-16 h-12 object-cover rounded-lg border border-white/10"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{p.title}</h4>
                      <p className="text-[11px] font-mono-num text-[#C5A880]">
                        {p.category} • {p.location || 'India'} • {p.year || 2025}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => deleteProject(p._id || p.id)}
                    className="p-2 rounded-lg bg-rose-950/40 text-rose-400 hover:bg-rose-900/60 border border-rose-500/20 transition"
                    title="Delete Project"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
