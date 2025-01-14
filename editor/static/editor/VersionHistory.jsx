import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Clock, User, ArrowLeft, Eye } from 'lucide-react';

const VersionHistory = () => {
  const [expandedVersion, setExpandedVersion] = useState(null);
  const [versions, setVersions] = useState([]);

  // Fetch versions when component mounts
  React.useEffect(() => {
    const docId = window.location.pathname.split('/').pop();
    fetch(`/api/document/${docId}/versions/`)
      .then(res => res.json())
      .then(data => setVersions(data.versions))
      .catch(err => console.error('Error fetching versions:', err));
  }, []);

  const restoreVersion = async (versionId) => {
    const docId = window.location.pathname.split('/').pop();
    try {
      const response = await fetch(`/api/document/${docId}/restore/${versionId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.ok) {
        window.location.href = `/document/${docId}/edit`;
      }
    } catch (err) {
      console.error('Error restoring version:', err);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Document Version History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {versions.map((version) => (
            <div
              key={version.id}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">
                    Version {version.version_number}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <User className="w-4 h-4" />
                    <span>{version.modified_by}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{new Date(version.modified_at).toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setExpandedVersion(
                      expandedVersion === version.id ? null : version.id
                    )}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    {expandedVersion === version.id ? 
                      <ChevronUp className="w-5 h-5" /> : 
                      <ChevronDown className="w-5 h-5" />
                    }
                  </button>
                </div>
              </div>
              
              {expandedVersion === version.id && (
                <div className="mt-4 space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <pre className="whitespace-pre-wrap">{version.content}</pre>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => restoreVersion(version.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Restore This Version
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VersionHistory;