import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  FileText, 
  Search,
  Download,
  Eye,
  Edit
} from "lucide-react";

const DocumentVerification = () => {
  const documents = [
    {
      id: "INV-2024-001",
      type: "Facture vente",
      client: "Client ABC SARL",
      amount: "350 000",
      date: "15 Déc 2024",
      status: "verified",
      issues: [],
    },
    {
      id: "INV-2024-002",
      type: "Facture vente",
      client: "Entreprise XYZ",
      amount: "125 000",
      date: "18 Déc 2024",
      status: "warning",
      issues: ["NIU client manquant"],
    },
    {
      id: "ACH-2024-045",
      type: "Facture achat",
      supplier: "Fournisseur DEF",
      amount: "87 500",
      date: "12 Déc 2024",
      status: "verified",
      issues: [],
    },
    {
      id: "ACH-2024-046",
      type: "Facture achat",
      supplier: "Société GHI",
      amount: "450 000",
      date: "20 Déc 2024",
      status: "error",
      issues: ["Montant TVA incorrect", "Date non conforme"],
    },
    {
      id: "INV-2024-003",
      type: "Facture vente",
      client: "Particulier",
      amount: "25 000",
      date: "22 Déc 2024",
      status: "verified",
      issues: [],
    },
  ];

  const stats = {
    total: 45,
    verified: 38,
    warnings: 4,
    errors: 3,
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case "error":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <FileText className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return (
          <Badge className="bg-success text-success-foreground">
            Vérifié
          </Badge>
        );
      case "warning":
        return (
          <Badge className="bg-warning text-warning-foreground">
            Attention
          </Badge>
        );
      case "error":
        return (
          <Badge className="bg-destructive text-destructive-foreground">
            Erreur
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Vérification des documents</h1>
          <p className="text-muted-foreground">Contrôlez la conformité de vos pièces justificatives</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">{stats.total}</p>
                <p className="text-sm text-muted-foreground mt-1">Documents total</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-success-light border-success/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-success">{stats.verified}</p>
                <p className="text-sm text-muted-foreground mt-1">Vérifiés</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-warning-light border-warning/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-warning">{stats.warnings}</p>
                <p className="text-sm text-muted-foreground mt-1">Avertissements</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-destructive-light border-destructive/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-destructive">{stats.errors}</p>
                <p className="text-sm text-muted-foreground mt-1">Erreurs</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Rechercher par numéro, client, montant..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Filtrer</Button>
              <Button variant="outline">Tout vérifier</Button>
            </div>
          </CardContent>
        </Card>

        {/* Documents List */}
        <Card>
          <CardHeader>
            <CardTitle>Documents à vérifier</CardTitle>
            <CardDescription>Période: Décembre 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div 
                  key={index}
                  className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="mt-1">
                      {getStatusIcon(doc.status)}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <p className="font-semibold text-foreground">{doc.id}</p>
                        <Badge variant="outline" className="text-xs">{doc.type}</Badge>
                        {getStatusBadge(doc.status)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>{doc.client || doc.supplier}</p>
                        <p className="flex items-center gap-4 mt-1">
                          <span>{doc.amount} FCFA</span>
                          <span>•</span>
                          <span>{doc.date}</span>
                        </p>
                      </div>
                      {doc.issues.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {doc.issues.map((issue, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs">
                              <div className={`w-1.5 h-1.5 rounded-full ${
                                doc.status === "error" ? "bg-destructive" : "bg-warning"
                              }`} />
                              <span className="text-muted-foreground">{issue}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    {doc.status !== "verified" && (
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Corriger
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Verification Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Résumé de vérification</CardTitle>
            <CardDescription>Points de contrôle automatiques</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-success-light rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium text-foreground">Numéros de factures</p>
                    <p className="text-xs text-muted-foreground">Séquence conforme et sans doublon</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-background text-success border-success">OK</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-success-light rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium text-foreground">Calculs TVA</p>
                    <p className="text-xs text-muted-foreground">Taux et montants corrects</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-background text-success border-success">OK</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-warning-light rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  <div>
                    <p className="font-medium text-foreground">Informations clients</p>
                    <p className="text-xs text-muted-foreground">4 NIU clients manquants</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-background text-warning border-warning">À corriger</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-destructive-light rounded-lg">
                <div className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-destructive" />
                  <div>
                    <p className="font-medium text-foreground">Dates de facturation</p>
                    <p className="text-xs text-muted-foreground">3 dates hors période fiscale</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-background text-destructive border-destructive">Erreur</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex-1">
            Retour à l'import
          </Button>
          <Button 
            className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground"
            disabled={stats.errors > 0}
          >
            Continuer vers les calculs
          </Button>
        </div>

        {stats.errors > 0 && (
          <p className="text-sm text-center text-destructive">
            Veuillez corriger toutes les erreurs avant de continuer
          </p>
        )}
      </div>
    </div>
  );
};

export default DocumentVerification;
