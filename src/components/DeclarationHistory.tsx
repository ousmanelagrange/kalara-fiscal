import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Archive, 
  Search, 
  Download, 
  Eye,
  Calendar,
  Filter
} from "lucide-react";

const DeclarationHistory = () => {
  const history = [
    {
      period: "Décembre 2024",
      type: "TVA Mensuelle",
      amount: "2 450 000 FCFA",
      status: "Transmise",
      date: "05 Jan 2025",
      color: "success"
    },
    {
      period: "Novembre 2024",
      type: "TVA Mensuelle",
      amount: "2 180 000 FCFA",
      status: "Transmise",
      date: "10 Déc 2024",
      color: "success"
    },
    {
      period: "T4 2024",
      type: "IS Trimestriel",
      amount: "5 200 000 FCFA",
      status: "En attente",
      date: "À venir",
      color: "warning"
    },
    {
      period: "Octobre 2024",
      type: "TVA Mensuelle",
      amount: "2 340 000 FCFA",
      status: "Transmise",
      date: "12 Nov 2024",
      color: "success"
    },
    {
      period: "Septembre 2024",
      type: "TVA Mensuelle",
      amount: "1 950 000 FCFA",
      status: "Transmise",
      date: "08 Oct 2024",
      color: "success"
    }
  ];

  const stats = [
    { label: "Total déclaré 2024", value: "28 M FCFA" },
    { label: "Déclarations transmises", value: "12" },
    { label: "Taux conformité", value: "100%" }
  ];

  const getStatusColor = (color: string) => {
    switch (color) {
      case "success": return "bg-success text-success-foreground";
      case "warning": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Historique des déclarations</h1>
            <p className="text-muted-foreground">Consultez et téléchargez vos déclarations passées</p>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exporter tout
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recherche et filtres</CardTitle>
                <CardDescription>Trouvez rapidement une déclaration</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Rechercher par période, type..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filtres
              </Button>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Période
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* History Table */}
        <Card>
          <CardHeader>
            <CardTitle>Déclarations archivées</CardTitle>
            <CardDescription>Toutes vos déclarations conservées en ligne</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {history.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Archive className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-semibold text-foreground">{item.period}</p>
                        <Badge variant="outline" className="text-xs">
                          {item.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.amount} • {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(item.color)}>
                      {item.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Voir
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
      </div>
    </div>
  );
};

export default DeclarationHistory;
