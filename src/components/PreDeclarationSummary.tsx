import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  FileCheck, 
  Building2, 
  Calendar, 
  Calculator, 
  FileText,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

const PreDeclarationSummary = () => {
  const companyInfo = {
    name: "SARL Kalar Technologies",
    niu: "M051234567890A",
    regime: "Réel Normal",
    period: "Décembre 2024"
  };

  const taxCalculations = {
    sales: "29 250 000",
    tvaCollected: "4 850 000",
    purchases: "14 468 000",
    tvaDeductible: "2 400 000",
    tvaDue: "2 450 000"
  };

  const documents = {
    invoicesSales: 45,
    invoicesPurchases: 28,
    bankStatements: 3,
    otherDocs: 7
  };

  const checklist = [
    { id: 1, label: "Toutes les factures de vente sont numérotées séquentiellement", checked: true },
    { id: 2, label: "Les NIU clients sont présents sur toutes les factures", checked: false },
    { id: 3, label: "Les calculs de TVA sont corrects", checked: true },
    { id: 4, label: "Les relevés bancaires concordent avec la comptabilité", checked: true },
    { id: 5, label: "Tous les justificatifs sont archivés", checked: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <FileCheck className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Récapitulatif final</h1>
          <p className="text-muted-foreground">Vérifiez toutes les informations avant génération</p>
        </div>

        {/* Company Info */}
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-primary" />
              <div>
                <CardTitle>Informations entreprise</CardTitle>
                <CardDescription>Données déclarantes</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Raison sociale</p>
                <p className="font-semibold text-foreground text-sm">{companyInfo.name}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">NIU</p>
                <p className="font-semibold text-foreground text-sm">{companyInfo.niu}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Régime</p>
                <p className="font-semibold text-foreground text-sm">{companyInfo.regime}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Période</p>
                <p className="font-semibold text-foreground text-sm">{companyInfo.period}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tax Calculations */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Calculator className="h-6 w-6 text-secondary" />
              <div>
                <CardTitle>Calculs fiscaux</CardTitle>
                <CardDescription>Montants TVA de la période</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Chiffre d'affaires TTC</span>
                <span className="font-semibold text-foreground">{taxCalculations.sales} FCFA</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">TVA collectée (19.25%)</span>
                <span className="font-semibold text-foreground">{taxCalculations.tvaCollected} FCFA</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Achats et charges TTC</span>
                <span className="font-semibold text-foreground">{taxCalculations.purchases} FCFA</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">TVA déductible (19.25%)</span>
                <span className="font-semibold text-foreground">{taxCalculations.tvaDeductible} FCFA</span>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between items-center bg-primary-light p-4 rounded-lg">
                <span className="font-bold text-foreground text-lg">TVA nette à payer</span>
                <span className="text-2xl font-bold text-primary">{taxCalculations.tvaDue} FCFA</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documents Summary */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-accent" />
              <div>
                <CardTitle>Documents annexés</CardTitle>
                <CardDescription>Pièces justificatives de la déclaration</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-success-light rounded-lg">
                <p className="text-2xl font-bold text-success">{documents.invoicesSales}</p>
                <p className="text-xs text-muted-foreground mt-1">Factures ventes</p>
              </div>
              <div className="text-center p-4 bg-success-light rounded-lg">
                <p className="text-2xl font-bold text-success">{documents.invoicesPurchases}</p>
                <p className="text-xs text-muted-foreground mt-1">Factures achats</p>
              </div>
              <div className="text-center p-4 bg-success-light rounded-lg">
                <p className="text-2xl font-bold text-success">{documents.bankStatements}</p>
                <p className="text-xs text-muted-foreground mt-1">Relevés bancaires</p>
              </div>
              <div className="text-center p-4 bg-success-light rounded-lg">
                <p className="text-2xl font-bold text-success">{documents.otherDocs}</p>
                <p className="text-xs text-muted-foreground mt-1">Autres documents</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Checklist */}
        <Card>
          <CardHeader>
            <CardTitle>Liste de vérification finale</CardTitle>
            <CardDescription>Cochez tous les points avant de continuer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {checklist.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30">
                  <Checkbox 
                    id={`check-${item.id}`} 
                    defaultChecked={item.checked}
                  />
                  <label
                    htmlFor={`check-${item.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Card className="bg-warning-light border-warning/20">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-2">
                  Attention - Vérification importante
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Une fois la déclaration générée, vous ne pourrez plus modifier les données de cette période. Assurez-vous que toutes les informations sont exactes.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                  <li>• 1 point de checklist non validé</li>
                  <li>• Vérifiez les NIU clients manquants</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Confirmation */}
        <Card className="bg-success-light border-success/20">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-foreground mb-2">
                  Déclaration prête à être générée
                </p>
                <p className="text-sm text-muted-foreground">
                  Tous les calculs ont été vérifiés et les documents sont complets. Vous pouvez procéder à la génération des fichiers de déclaration.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex-1">
            Retour aux modifications
          </Button>
          <Button className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground">
            Générer la déclaration
          </Button>
        </div>

        {/* Footer Info */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Date limite de transmission : 15 Janvier 2025</span>
          </div>
          <p className="text-xs text-muted-foreground">
            La génération prendra quelques instants
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreDeclarationSummary;
