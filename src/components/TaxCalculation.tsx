import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calculator, 
  AlertCircle, 
  TrendingUp, 
  TrendingDown,
  CheckCircle2,
  Info
} from "lucide-react";

const TaxCalculation = () => {
  const calculations = [
    {
      title: "TVA Collectée",
      amount: "4 850 000",
      detail: "Sur chiffre d'affaires TTC",
      change: "+12%",
      positive: true
    },
    {
      title: "TVA Déductible",
      amount: "2 400 000",
      detail: "Achats et charges",
      change: "-5%",
      positive: false
    },
    {
      title: "TVA à Payer",
      amount: "2 450 000",
      detail: "Net à reverser à la DGI",
      status: "primary"
    }
  ];

  const verifications = [
    { label: "Cohérence des montants", status: "success", message: "Tous les calculs sont cohérents" },
    { label: "Justificatifs complets", status: "warning", message: "3 factures sans numéro NIU" },
    { label: "Seuils TVA", status: "success", message: "Seuil non franchi" },
    { label: "Délais de déclaration", status: "success", message: "Dans les temps (5 jours restants)" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success": return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "warning": return <AlertCircle className="h-5 w-5 text-warning" />;
      default: return <Info className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Calculs fiscaux</h1>
            <p className="text-muted-foreground">TVA - Période: Décembre 2024</p>
          </div>
          <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
            <Calculator className="h-4 w-4 mr-2" />
            Recalculer
          </Button>
        </div>

        {/* Main Calculations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {calculations.map((calc, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {calc.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">
                    {calc.amount}
                  </span>
                  <span className="text-sm text-muted-foreground">FCFA</span>
                </div>
                <p className="text-sm text-muted-foreground">{calc.detail}</p>
                {calc.change && (
                  <Badge 
                    variant="outline" 
                    className={calc.positive ? "text-success border-success" : "text-muted-foreground"}
                  >
                    {calc.positive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                    {calc.change} vs mois précédent
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Détail des opérations</CardTitle>
            <CardDescription>Récapitulatif des transactions déclarées</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Ventes TTC</span>
                <span className="font-semibold text-foreground">29 250 000 FCFA</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">TVA collectée (19.25%)</span>
                <span className="font-semibold text-foreground">4 850 000 FCFA</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Achats et charges TTC</span>
                <span className="font-semibold text-foreground">14 468 000 FCFA</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">TVA déductible (19.25%)</span>
                <span className="font-semibold text-foreground">2 400 000 FCFA</span>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between items-center bg-primary-light p-4 rounded-lg">
                <span className="font-semibold text-foreground">TVA nette à payer</span>
                <span className="text-2xl font-bold text-primary">2 450 000 FCFA</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verifications */}
        <Card>
          <CardHeader>
            <CardTitle>Vérifications automatiques</CardTitle>
            <CardDescription>Contrôles de conformité et d'exhaustivité</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {verifications.map((check, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                  {getStatusIcon(check.status)}
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{check.label}</p>
                    <p className="text-sm text-muted-foreground">{check.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4">
          <Button variant="outline" className="flex-1">
            Modifier les données
          </Button>
          <Button className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground">
            Valider et passer à la génération
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculation;
