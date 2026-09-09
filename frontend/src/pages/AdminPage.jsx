import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Database, 
  ArrowLeft, 
  MessageSquare, 
  FolderPlus, 
  Layers, 
  Trash2, 
  CheckCircle2, 
  RefreshCw, 
  ShieldCheck, 
  PlusCircle, 
  Star, 
  Calendar, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  Building,
  Lock,
  Unlock,
  KeyRound,
  Eye,
  EyeOff,
  LogOut,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import BrandLogo from '../components/BrandLogo';

export default function AdminPage() {
  const { 
    projects, 
    contacts, 
    testimonials,
    fetchContacts, 
    addProject, 
    deleteProject,
    refreshData
  } = useApp();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('genrev_admin_auth') === 'true';
  });
  const [userIdInput, setUserIdInput] = useState('');
  const [passcodeInput, setPasscodeInput] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const [activeTab, setActiveTab] = useState('inquiries'); // 'inquiries', 'addProject', 'projects', 'testimonials'
  const [statusMsg, setStatusMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Authentication Handler
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    setIsAuthenticating(true);

    const cleanUserId = userIdInput.trim();
    const cleanPasscode = passcodeInput.trim();

    // Direct check for required credentials: admin@gen & interio@gen
    if (cleanUserId === 'admin@gen' && cleanPasscode === 'interio@gen') {
      sessionStorage.setItem('genrev_admin_auth', 'true');
      setIsAuthenticated(true);
      fetchContacts();
      refreshData();
      setIsAuthenticating(false);
      return;
    }

    // Try backend verification fallback
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: cleanUserId, passcode: cleanPasscode })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        sessionStorage.setItem('genrev_admin_auth', 'true');
        setIsAuthenticated(true);
        fetchContacts();
        refreshData();
        setIsAuthenticating(false);
        return;
      }
    } catch (err) {}

    setIsAuthenticating(false);
    setAuthError('Invalid User ID or Passcode. Access restricted.');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('genrev_admin_auth');
    setIsAuthenticated(false);
    setUserIdInput('');
    setPasscodeInput('');
    setAuthError('');
  };

  // New Project Form State
  const [newProject, setNewProject] = useState({
    title: '',
    subtitle: '',
    category: 'Residential',
    description: '',
    detailedText: '',
    imageUrlInput: '',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'],
    location: 'Worli Sea Face, Mumbai',
    year: 2026,
    area: '6,400 sq.ft'
  });

  // New Testimonial Form State
  const [newTestimonial, setNewTestimonial] = useState({
    clientName: '',
    role: 'Homeowner',
    company: '',
    quote: '',
    projectType: 'Luxury Duplex Penthouse',
    rating: 5
  });

  useEffect(() => {
    fetchContacts();
    refreshData();
  }, []);

  const handleAddProjectSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg('');

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
      setStatusMsg('Project successfully stored in MongoDB / Database!');
      setNewProject({
        title: '',
        subtitle: '',
        category: 'Residential',
        description: '',
        detailedText: '',
        imageUrlInput: '',
        images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'],
        location: 'Worli Sea Face, Mumbai',
        year: 2026,
        area: '6,400 sq.ft'
      });
      setTimeout(() => setActiveTab('projects'), 1000);
    } else {
      setStatusMsg('Failed to create project. Please verify backend connection.');
    }
  };

  const handleAddTestimonialSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg('');

    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTestimonial)
      });
      if (res.ok) {
        setStatusMsg('Testimonial published successfully!');
        setNewTestimonial({
          clientName: '',
          role: 'Homeowner',
          company: '',
          quote: '',
          projectType: 'Luxury Duplex Penthouse',
          rating: 5
        });
        refreshData();
      }
    } catch (err) {
      setStatusMsg('Failed to publish testimonial.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0C0D10] text-[#E2E1DC] flex flex-col justify-between p-6 sm:p-10 select-none relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top bar with back to site */}
        <div className="max-w-md mx-auto w-full flex items-center justify-between z-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-wider text-neutral-400 hover:text-white transition px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/25"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Return to Site</span>
          </a>

          <div className="flex items-center gap-1.5 text-[11px] font-mono-num text-neutral-500">
            <Lock className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>RESTRICTED CONSOLE</span>
          </div>
        </div>

        {/* Main Login Card */}
        <div className="max-w-md mx-auto w-full z-10 my-auto py-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#14151A]/95 backdrop-blur-xl border border-white/10 shadow-2xl space-y-6">
            
            {/* Header Brand & Lock */}
            <div className="text-center space-y-3">
              <div className="inline-flex p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[#C5A880] shadow-inner mb-1">
                <KeyRound className="w-6 h-6" />
              </div>
              
              <div className="space-y-1">
                <h1 className="text-2xl font-bold font-sans tracking-tight text-white uppercase">
                  Executive Admin Portal
                </h1>
                <p className="text-xs text-neutral-400 font-mono-num">
                  GENREV INTERIO MANAGEMENT & LEADS
                </p>
              </div>
            </div>

            {/* Error Message */}
            {authError && (
              <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center gap-3 text-red-300 text-xs font-mono-num animate-in fade-in duration-200">
                <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono-num font-semibold uppercase tracking-widest text-neutral-400 mb-1.5">
                  User ID
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={userIdInput}
                    onChange={(e) => setUserIdInput(e.target.value)}
                    placeholder="admin@gen"
                    className="w-full bg-[#0C0D10] border border-white/10 focus:border-[#C5A880] text-white rounded-xl pl-10 pr-4 py-3 text-sm outline-none transition font-mono-num placeholder:text-neutral-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono-num font-semibold uppercase tracking-widest text-neutral-400 mb-1.5">
                  Passcode
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPasscode ? 'text' : 'password'}
                    required
                    value={passcodeInput}
                    onChange={(e) => setPasscodeInput(e.target.value)}
                    placeholder="••••••••••"
                    className="w-full bg-[#0C0D10] border border-white/10 focus:border-[#C5A880] text-white rounded-xl pl-10 pr-11 py-3 text-sm outline-none transition font-mono-num placeholder:text-neutral-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasscode(!showPasscode)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-500 hover:text-white transition cursor-pointer"
                    title={showPasscode ? 'Hide passcode' : 'Show passcode'}
                  >
                    {showPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isAuthenticating}
                className="w-full py-3.5 mt-2 rounded-xl bg-[#C5A880] hover:bg-[#DFC49F] text-black font-semibold text-xs font-mono-num tracking-widest uppercase transition-all duration-300 shadow-lg shadow-[#C5A880]/15 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{isAuthenticating ? 'VERIFYING...' : 'AUTHENTICATE & ENTER'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Registered ID & Passcode info */}
            <div className="pt-2 border-t border-white/5 text-center">
              <p className="text-[11px] font-mono-num text-neutral-500">
                Authorized User ID: <code className="text-[#C5A880]">admin@gen</code>
              </p>
            </div>

          </div>
        </div>

        {/* Footer info */}
        <div className="text-center text-[10px] font-mono-num text-neutral-600 z-10">
          GENREV INTERIO PVT. LTD. • SECURE ARCHITECTURAL DATABASE
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0E11] text-[#E2E1DC] selection:bg-[#C5A880]/30 selection:text-white">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 bg-[#121317]/95 backdrop-blur-md border-b border-white/10 px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2 text-xs font-mono-num uppercase tracking-wider text-neutral-400 hover:text-white transition px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-[#C5A880]/40"
          >
            <ArrowLeft className="w-4 h-4 text-[#C5A880]" />
            <span>View Live Website</span>
          </a>

          <div className="h-5 w-[1px] bg-white/10 hidden sm:block"></div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-white font-sans">
              genrev<span className="text-[#C5A880]">.</span>interio
            </span>
            <span className="text-[10px] uppercase font-mono-num px-2 py-0.5 rounded bg-[#C5A880]/15 text-[#C5A880] border border-[#C5A880]/30 ml-2">
              ADMIN CONTROL PANEL
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Active User Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-num text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-neutral-400">admin@gen</span>
          </div>

          <button
            onClick={() => {
              fetchContacts();
              refreshData();
            }}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition cursor-pointer"
            title="Sync Database"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/30 hover:bg-red-950/60 border border-red-500/20 hover:border-red-500/40 text-red-300 text-xs font-mono-num uppercase tracking-wider transition cursor-pointer"
            title="Sign Out of Console"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        {/* KPI Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-xl bg-[#14151A] border border-white/5 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono-num uppercase tracking-wider text-neutral-400">
                Incoming Leads
              </span>
              <p className="text-3xl font-bold font-mono-num text-white mt-1">
                {contacts.length}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#C5A880]/10 text-[#C5A880]">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#14151A] border border-white/5 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono-num uppercase tracking-wider text-neutral-400">
                Active Projects
              </span>
              <p className="text-3xl font-bold font-mono-num text-white mt-1">
                {projects.length}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Layers className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#14151A] border border-white/5 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono-num uppercase tracking-wider text-neutral-400">
                Testimonials
              </span>
              <p className="text-3xl font-bold font-mono-num text-white mt-1">
                {testimonials.length}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <Star className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#14151A] border border-white/5 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono-num uppercase tracking-wider text-neutral-400">
                Database Engine
              </span>
              <p className="text-base font-bold font-mono-num text-emerald-400 mt-2 flex items-center gap-1.5">
                <Database className="w-4 h-4" /> Connected
              </p>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 mb-8 overflow-x-auto">
          <button
            onClick={() => { setActiveTab('inquiries'); setStatusMsg(''); }}
            className={`py-3 px-6 text-xs font-mono-num uppercase tracking-wider flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
              activeTab === 'inquiries'
                ? 'border-[#C5A880] text-[#C5A880] font-bold bg-white/[0.02]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Client Inquiries ({contacts.length})
          </button>

          <button
            onClick={() => { setActiveTab('addProject'); setStatusMsg(''); }}
            className={`py-3 px-6 text-xs font-mono-num uppercase tracking-wider flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
              activeTab === 'addProject'
                ? 'border-[#C5A880] text-[#C5A880] font-bold bg-white/[0.02]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <FolderPlus className="w-4 h-4" />
            Publish New Project
          </button>

          <button
            onClick={() => { setActiveTab('projects'); setStatusMsg(''); }}
            className={`py-3 px-6 text-xs font-mono-num uppercase tracking-wider flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
              activeTab === 'projects'
                ? 'border-[#C5A880] text-[#C5A880] font-bold bg-white/[0.02]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            Manage Projects ({projects.length})
          </button>

          <button
            onClick={() => { setActiveTab('testimonials'); setStatusMsg(''); }}
            className={`py-3 px-6 text-xs font-mono-num uppercase tracking-wider flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
              activeTab === 'testimonials'
                ? 'border-[#C5A880] text-[#C5A880] font-bold bg-white/[0.02]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Star className="w-4 h-4" />
            Manage Reviews ({testimonials.length})
          </button>
        </div>

        {/* Global Notification Banner */}
        {statusMsg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{statusMsg}</span>
          </div>
        )}

        {/* TAB 1: CLIENT INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono-num">
                Client Leads Submitted from Website
              </h3>
              <span className="text-xs text-neutral-400 font-mono-num">
                Synced in real time via POST /api/contact
              </span>
            </div>

            {contacts.length === 0 ? (
              <div className="p-16 text-center text-neutral-500 border border-dashed border-white/10 rounded-2xl bg-[#121317]">
                <MessageSquare className="w-10 h-10 mx-auto mb-3 text-neutral-600" />
                <p className="text-sm font-semibold text-neutral-300">No client leads yet</p>
                <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
                  When prospective clients fill out the "Get in Touch" form on the home page, their inquiries will appear here instantly.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {contacts.map((c) => (
                  <div
                    key={c._id || c.id}
                    className="p-6 rounded-xl bg-[#14151A] border border-white/10 hover:border-[#C5A880]/30 transition-all flex flex-col md:flex-row justify-between gap-6 shadow-lg"
                  >
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-base font-bold text-white flex items-center gap-1.5">
                          <User className="w-4 h-4 text-[#C5A880]" />
                          {c.name}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-num bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                          {c.status || 'New Lead'}
                        </span>
                        <span className="text-xs font-mono-num text-neutral-500">
                          {new Date(c.createdAt).toLocaleString()}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono-num text-neutral-300">
                        <a href={`mailto:${c.email}`} className="flex items-center gap-1 hover:text-[#C5A880] transition">
                          <Mail className="w-3.5 h-3.5 text-[#C5A880]" /> {c.email}
                        </a>
                        {c.phone && (
                          <a href={`tel:${c.phone}`} className="flex items-center gap-1 hover:text-[#C5A880] transition">
                            <Phone className="w-3.5 h-3.5 text-[#C5A880]" /> {c.phone}
                          </a>
                        )}
                        {c.company && (
                          <span className="flex items-center gap-1 text-neutral-400">
                            <Building className="w-3.5 h-3.5 text-neutral-500" /> {c.company}
                          </span>
                        )}
                      </div>

                      <div className="p-4 rounded-lg bg-[#0E0F12] border border-white/5">
                        <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-light">
                          "{c.message}"
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 text-[10px] font-mono-num text-neutral-400">
                        <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[#C5A880]">
                          Scope: {c.service}
                        </span>
                        <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">
                          Budget: {c.budget}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PUBLISH NEW PROJECT */}
        {activeTab === 'addProject' && (
          <div className="p-8 rounded-2xl bg-[#14151A] border border-white/10 max-w-4xl shadow-xl">
            <h3 className="text-lg font-bold text-white font-editorial mb-2">
              Publish New Architectural Project
            </h3>
            <p className="text-xs text-neutral-400 mb-6 font-mono-num">
              Adds a new case study directly to MongoDB / REST API.
            </p>

            <form onSubmit={handleAddProjectSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. The Glasshouse Estate"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D0E11] border border-white/10 text-white text-xs focus:border-[#C5A880] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                    Category *
                  </label>
                  <select
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D0E11] border border-white/10 text-white text-xs focus:border-[#C5A880] focus:outline-none"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Turnkey Interiors">Turnkey Interiors</option>
                    <option value="Architecture">Architecture</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={newProject.location}
                    onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D0E11] border border-white/10 text-white text-xs focus:border-[#C5A880] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                    Completion Year
                  </label>
                  <input
                    type="number"
                    value={newProject.year}
                    onChange={(e) => setNewProject({ ...newProject, year: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D0E11] border border-white/10 text-white text-xs focus:border-[#C5A880] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                    Floor Area (sq.ft)
                  </label>
                  <input
                    type="text"
                    value={newProject.area}
                    onChange={(e) => setNewProject({ ...newProject, area: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D0E11] border border-white/10 text-white text-xs focus:border-[#C5A880] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                  Image URL (Cloudinary / S3 / Unsplash)
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={newProject.imageUrlInput}
                  onChange={(e) => setNewProject({ ...newProject, imageUrlInput: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0E11] border border-white/10 text-white text-xs focus:border-[#C5A880] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                  Card Summary Description *
                </label>
                <textarea
                  required
                  rows={2}
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  placeholder="A concise, editorial summary displayed on project cards..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0E11] border border-white/10 text-white text-xs focus:border-[#C5A880] focus:outline-none resize-none leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-400 mb-2">
                  Detailed Case Study Narrative
                </label>
                <textarea
                  rows={3}
                  value={newProject.detailedText}
                  onChange={(e) => setNewProject({ ...newProject, detailedText: e.target.value })}
                  placeholder="Comprehensive design narrative, materials, civil alterations..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0E11] border border-white/10 text-white text-xs focus:border-[#C5A880] focus:outline-none resize-none leading-relaxed"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-8 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#DFC49F] text-black font-semibold text-xs tracking-widest uppercase transition flex items-center gap-2 shadow-lg shadow-[#C5A880]/20 disabled:opacity-60"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>{submitting ? 'COMMITTING TO DATABASE...' : 'SAVE & PUBLISH TO WEBSITE'}</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TAB 3: MANAGE PROJECTS */}
        {activeTab === 'projects' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono-num">
                Live Projects ({projects.length})
              </h3>
              <button
                onClick={() => setActiveTab('addProject')}
                className="px-4 py-1.5 rounded-lg bg-[#C5A880] text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#DFC49F] transition"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add Project</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((p) => (
                <div
                  key={p._id || p.id}
                  className="p-4 rounded-xl bg-[#14151A] border border-white/10 hover:border-white/20 transition flex items-start gap-4"
                >
                  <img
                    src={p.images && p.images[0] ? p.images[0] : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80'}
                    alt={p.title}
                    className="w-24 h-24 object-cover rounded-lg border border-white/10 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono-num text-[#C5A880] uppercase tracking-widest block">
                      {p.category}
                    </span>
                    <h4 className="text-base font-editorial font-bold text-white truncate mt-0.5">
                      {p.title}
                    </h4>
                    <p className="text-xs text-neutral-400 line-clamp-2 mt-1 font-light">
                      {p.description}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] font-mono-num text-neutral-500 mt-2">
                      <span>{p.location || 'India'}</span>
                      <span>•</span>
                      <span>{p.year || 2026}</span>
                      {p.area && (
                        <>
                          <span>•</span>
                          <span>{p.area}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={async () => {
                      if (confirm(`Delete project "${p.title}" from database?`)) {
                        await deleteProject(p._id || p.id);
                      }
                    }}
                    className="p-2.5 rounded-lg bg-rose-950/40 text-rose-400 hover:bg-rose-900/60 border border-rose-500/20 transition self-center"
                    title="Delete Project"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: MANAGE TESTIMONIALS */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 p-6 rounded-xl bg-[#14151A] border border-white/10">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono-num mb-4">
                Add Client Testimonial
              </h4>

              <form onSubmit={handleAddTestimonialSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono-num text-neutral-400 mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singhania"
                    value={newTestimonial.clientName}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, clientName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0D0E11] border border-white/10 text-white text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono-num text-neutral-400 mb-1">
                      Role / Title
                    </label>
                    <input
                      type="text"
                      placeholder="Managing Director"
                      value={newTestimonial.role}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#0D0E11] border border-white/10 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-num text-neutral-400 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Singhania Group"
                      value={newTestimonial.company}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, company: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#0D0E11] border border-white/10 text-white text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-num text-neutral-400 mb-1">
                    Project Type
                  </label>
                  <input
                    type="text"
                    placeholder="Sea-Facing Penthouse"
                    value={newTestimonial.projectType}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, projectType: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0D0E11] border border-white/10 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-num text-neutral-400 mb-1">
                    Quote / Review *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Client's direct testimonial words..."
                    value={newTestimonial.quote}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, quote: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0D0E11] border border-white/10 text-white text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 rounded-lg bg-[#C5A880] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#DFC49F] transition"
                >
                  Publish Testimonial
                </button>
              </form>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono-num mb-4">
                Active Client Reviews ({testimonials.length})
              </h4>

              {testimonials.map((t) => (
                <div
                  key={t._id || t.id}
                  className="p-5 rounded-xl bg-[#14151A] border border-white/10 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{t.clientName}</span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-400 font-mono-num">
                    {t.role} {t.company ? `• ${t.company}` : ''} • {t.projectType}
                  </p>
                  <p className="text-xs text-neutral-300 italic">
                    "{t.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
