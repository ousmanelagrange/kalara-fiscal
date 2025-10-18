import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Upload, 
  Calculator,
  Send,
  Archive
} from "lucide-react";

const FiscalDashboard = () => {
  const stats = [
    { label: "TVA à déclarer", value: "2 450 000 FCFA", status: "pending", icon: Calculator },
    { label: "Dernière déclaration", value: "Décembre 2024", status: "success", icon: CheckCircle2 },
    { label: "Prochaine échéance", value: "15 Janvier 2025", status: "warning", icon: Clock },
    { label: "Documents manquants", value: "3 factures", status: "error", icon: AlertCircle },
  ];

  const declarations = [
    { period: "Décembre 2024", type: "TVA Mensuelle", status: "En cours", progress: 65 },
    { period: "T4 2024", type: "IS Trimestriel", status: "À commencer", progress: 0 },
    { period: "Novembre 2024", type: "TVA Mensuelle", status: "Transmise", progress: 100 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "bg-success text-success-foreground";
      case "warning": return "bg-warning text-warning-foreground";
      case "error": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress === 100) return "bg-success";
    if (progress > 50) return "bg-warning";
    return "bg-primary";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/10 to-secondary-light/10 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Déclaration Fiscale</h1>
          <p className="text-muted-foreground text-lg">Gérez vos déclarations DGI en toute simplicité</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${getStatusColor(stat.status)}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="border-primary/20 hover:border-primary transition-colors">
            <CardHeader>
              <Upload className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Importer des données</CardTitle>
              <CardDescription>Téléchargez vos factures et relevés bancaires</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground">
                Commencer l'import
              </Button>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary transition-colors">
            <CardHeader>
              <Calculator className="h-8 w-8 text-secondary mb-2" />
              <CardTitle>Calculer mes impôts</CardTitle>
              <CardDescription>Simulation automatique TVA et IS</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Lancer le calcul
              </Button>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent transition-colors">
            <CardHeader>
              <Send className="h-8 w-8 text-accent mb-2" />
              <CardTitle>Générer déclaration</CardTitle>
              <CardDescription>Export PDF/XML conforme DGI</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Générer
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Declarations Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Déclarations en cours</CardTitle>
                <CardDescription>Suivez l'avancement de vos déclarations</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Archive className="h-4 w-4 mr-2" />
                Historique
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {declarations.map((decl, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">{decl.period}</p>
                          <p className="text-sm text-muted-foreground">{decl.type}</p>
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant={decl.progress === 100 ? "default" : "outline"}
                      className={decl.progress === 100 ? "bg-success text-success-foreground" : ""}
                    >
                      {decl.status}
                    </Badge>
                  </div>
                  <Progress 
                    value={decl.progress} 
                    className={`h-2 ${getProgressColor(decl.progress)}`}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FiscalDashboard;
