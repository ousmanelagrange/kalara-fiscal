import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  Check, 
  X, 
  Scan,
  Download,
  RefreshCw
} from "lucide-react";

const DataImport = () => {
  const uploadedFiles = [
    { name: "Factures_Decembre.pdf", status: "success", size: "2.4 MB", items: 45 },
    { name: "Releve_bancaire_Q4.csv", status: "processing", size: "1.1 MB", items: 128 },
    { name: "Justificatifs_achats.zip", status: "error", size: "5.2 MB", items: 0 },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success": return <Check className="h-4 w-4" />;
      case "error": return <X className="h-4 w-4" />;
      default: return <RefreshCw className="h-4 w-4 animate-spin" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "bg-success text-success-foreground";
      case "error": return "bg-destructive text-destructive-foreground";
      default: return "bg-warning text-warning-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Import de données</h1>
          <p className="text-muted-foreground">Importez vos factures, relevés et justificatifs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upload Zone */}
          <Card className="lg:col-span-2 border-dashed border-2 border-primary/30 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="h-10 w-10 text-primary" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Glissez vos fichiers ici
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    ou cliquez pour parcourir
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PDF, CSV, Excel, Images (max 20 MB)
                  </p>
                </div>
                <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
                  Sélectionner des fichiers
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Card className="border-secondary/20">
              <CardHeader>
                <Scan className="h-6 w-6 text-secondary mb-2" />
                <CardTitle className="text-base">Scanner OCR</CardTitle>
                <CardDescription className="text-xs">
                  Extraction automatique des factures papier
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" size="sm">
                  Activer scanner
                </Button>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <Download className="h-6 w-6 text-accent mb-2" />
                <CardTitle className="text-base">Import bancaire</CardTitle>
                <CardDescription className="text-xs">
                  Connexion automatique à votre banque
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" size="sm">
                  Connecter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Uploaded Files */}
        <Card>
          <CardHeader>
            <CardTitle>Fichiers importés</CardTitle>
            <CardDescription>Documents en cours de traitement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <FileText className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {file.size} • {file.status === "success" ? `${file.items} éléments extraits` : "En traitement..."}
                        </p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full flex items-center gap-1 ${getStatusColor(file.status)}`}>
                      {getStatusIcon(file.status)}
                      <span className="text-xs font-medium">
                        {file.status === "success" ? "Terminé" : file.status === "error" ? "Erreur" : "Traitement"}
                      </span>
                    </div>
                  </div>
                  {file.status === "processing" && (
                    <Progress value={65} className="h-1 bg-muted" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t flex justify-end gap-3">
              <Button variant="outline">
                Annuler
              </Button>
              <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
                Valider l'import (2 fichiers)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-success-light border-success/20">
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-success">187</p>
              <p className="text-sm text-muted-foreground mt-1">Factures traitées</p>
            </CardContent>
          </Card>
          <Card className="bg-warning-light border-warning/20">
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-warning">23</p>
              <p className="text-sm text-muted-foreground mt-1">À vérifier</p>
            </CardContent>
          </Card>
          <Card className="bg-primary-light border-primary/20">
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Taux extraction</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataImport;
