import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { RefreshCw, Download, Mail, Users } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const AdminDashboard = () => {
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [newsletterSubscriptions, setNewsletterSubscriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [contactResponse, newsletterResponse] = await Promise.all([
        axios.get(`${API}/contact`),
        axios.get(`${API}/newsletter`)
      ]);
      
      setContactSubmissions(contactResponse.data);
      setNewsletterSubscriptions(newsletterResponse.data);
      setLastUpdated(new Date().toLocaleString());
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const exportToCSV = (data, filename) => {
    const headers = Object.keys(data[0] || {}).join(',');
    const rows = data.map(item => 
      Object.values(item).map(val => 
        typeof val === 'string' ? `"${val.replace(/"/g, '""')}"` : val
      ).join(',')
    );
    const csv = [headers, ...rows].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black border-b border-white/20 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">
              Scale<span className="text-[#00FFD1]">IQ</span> Admin
            </div>
            <Badge variant="outline" className="border-[#00FFD1]/50 text-[#00FFD1] bg-[#00FFD1]/10">
              Form Submissions Dashboard
            </Badge>
          </div>
          
          <div className="flex items-center space-x-4">
            {lastUpdated && (
              <span className="text-sm text-white/70">
                Last updated: {lastUpdated}
              </span>
            )}
            <Button
              onClick={fetchData}
              disabled={loading}
              className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/90 rounded-sm font-medium"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <Tabs defaultValue="contact" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mb-6 bg-black/50 border border-[#00FFD1]/20">
            <TabsTrigger value="contact" className="data-[state=active]:bg-[#00FFD1] data-[state=active]:text-black">
              <Mail className="h-4 w-4 mr-2" />
              Contact Forms ({contactSubmissions.length})
            </TabsTrigger>
            <TabsTrigger value="newsletter" className="data-[state=active]:bg-[#00FFD1] data-[state=active]:text-black">
              <Users className="h-4 w-4 mr-2" />
              Newsletter ({newsletterSubscriptions.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contact">
            <Card className="bg-black/50 border-[#00FFD1]/20">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Contact Form Submissions</h2>
                  <Button
                    onClick={() => exportToCSV(contactSubmissions, 'contact_submissions.csv')}
                    className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/90 rounded-sm font-medium"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export CSV
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-white">
                    <thead>
                      <tr className="border-b border-[#00FFD1]/30">
                        <th className="text-left p-3 font-semibold text-white">Timestamp</th>
                        <th className="text-left p-3 font-semibold text-white">Name</th>
                        <th className="text-left p-3 font-semibold text-white">Email</th>
                        <th className="text-left p-3 font-semibold text-white">Company</th>
                        <th className="text-left p-3 font-semibold text-white">Position</th>
                        <th className="text-left p-3 font-semibold text-white">Phone</th>
                        <th className="text-left p-3 font-semibold text-white">Project Type</th>
                        <th className="text-left p-3 font-semibold text-white">Timeline</th>
                        <th className="text-left p-3 font-semibold text-white">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactSubmissions.map((submission) => (
                        <tr key={submission.id} className="border-b border-[#00FFD1]/20 hover:bg-[#00FFD1]/10">
                          <td className="p-3 text-white">{formatDate(submission.timestamp)}</td>
                          <td className="p-3 font-medium text-white">{submission.full_name}</td>
                          <td className="p-3 text-white">{submission.email}</td>
                          <td className="p-3 text-white">{submission.company}</td>
                          <td className="p-3 text-white">{submission.position}</td>
                          <td className="p-3 text-white">{submission.phone || 'N/A'}</td>
                          <td className="p-3">
                            <Badge variant="outline" className="border-[#00FFD1]/50 text-[#00FFD1] bg-[#00FFD1]/10">
                              {submission.project_type}
                            </Badge>
                          </td>
                          <td className="p-3 text-white">{submission.timeline}</td>
                          <td className="p-3">
                            <Badge variant="outline" className="border-[#00FFD1]/50 text-[#00FFD1] bg-[#00FFD1]/10">
                              {submission.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                      {contactSubmissions.length === 0 && (
                        <tr>
                          <td colSpan="9" className="p-6 text-center text-white/70">
                            No contact form submissions found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Message Preview */}
                {contactSubmissions.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4 text-white">Recent Messages</h3>
                    <div className="space-y-4">
                      {contactSubmissions.slice(0, 3).map((submission) => (
                        <div key={submission.id} className="bg-black/30 border border-[#00FFD1]/20 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-medium text-white">{submission.full_name}</span>
                            <span className="text-sm text-white/70">{formatDate(submission.timestamp)}</span>
                          </div>
                          <p className="text-white/90 text-sm">{submission.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="newsletter">
            <Card className="bg-black/50 border-[#00FFD1]/20">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Newsletter Subscriptions</h2>
                  <Button
                    onClick={() => exportToCSV(newsletterSubscriptions, 'newsletter_subscriptions.csv')}
                    className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/90 rounded-sm font-medium"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export CSV
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-white">
                    <thead>
                      <tr className="border-b border-[#00FFD1]/30">
                        <th className="text-left p-3 font-semibold text-white">Timestamp</th>
                        <th className="text-left p-3 font-semibold text-white">Email</th>
                        <th className="text-left p-3 font-semibold text-white">Status</th>
                        <th className="text-left p-3 font-semibold text-white">ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newsletterSubscriptions.map((subscription) => (
                        <tr key={subscription.id} className="border-b border-[#00FFD1]/20 hover:bg-[#00FFD1]/10">
                          <td className="p-3 text-white">{formatDate(subscription.timestamp)}</td>
                          <td className="p-3 font-medium text-white">{subscription.email}</td>
                          <td className="p-3">
                            <Badge variant="outline" className="border-[#00FFD1]/50 text-[#00FFD1] bg-[#00FFD1]/10">
                              {subscription.status}
                            </Badge>
                          </td>
                          <td className="p-3 text-white/70 text-xs">{subscription.id}</td>
                        </tr>
                      ))}
                      {newsletterSubscriptions.length === 0 && (
                        <tr>
                          <td colSpan="4" className="p-6 text-center text-white/70">
                            No newsletter subscriptions found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <Card className="bg-black/50 border-[#00FFD1]/20 p-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-8 w-8 text-[#00FFD1]" />
              <div>
                <div className="text-2xl font-bold text-white">{contactSubmissions.length}</div>
                <div className="text-white/70 text-sm">Total Contact Forms</div>
              </div>
            </div>
          </Card>

          <Card className="bg-black/50 border-[#00FFD1]/20 p-4">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-[#00FFD1]" />
              <div>
                <div className="text-2xl font-bold text-white">{newsletterSubscriptions.length}</div>
                <div className="text-white/70 text-sm">Newsletter Subscribers</div>
              </div>
            </div>
          </Card>

          <Card className="bg-black/50 border-[#00FFD1]/20 p-4">
            <div className="flex items-center space-x-3">
              <RefreshCw className="h-8 w-8 text-[#00FFD1]" />
              <div>
                <div className="text-2xl font-bold text-white">
                  {contactSubmissions.filter(s => s.status === 'new').length}
                </div>
                <div className="text-white/70 text-sm">New Submissions</div>
              </div>
            </div>
          </Card>

          <Card className="bg-black/50 border-[#00FFD1]/20 p-4">
            <div className="flex items-center space-x-3">
              <Download className="h-8 w-8 text-[#00FFD1]" />
              <div>
                <div className="text-2xl font-bold text-white">
                  {contactSubmissions.length + newsletterSubscriptions.length}
                </div>
                <div className="text-white/70 text-sm">Total Records</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};