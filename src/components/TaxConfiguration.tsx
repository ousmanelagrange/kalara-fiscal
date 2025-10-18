import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Calculator, Info, Calendar, Percent, FileCheck } from "lucide-react";

const TaxConfiguration = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Progress */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Configuration fiscale</h1>
              <p className="text-muted-foreground">Paramétrez votre régime d'imposition</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Progression</p>
              <p className="text-2xl font-bold text-primary">65%</p>
            </div>
          </div>
          <Progress value={65} className="h-2" />
        </div>

        {/* Tax Regime */}
        <Card className="border-border shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Régime fiscal</CardTitle>
                <CardDescription>Définissez votre régime d'imposition</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="tax-regime">Régime d'imposition *</Label>
                <Select>
                  <SelectTrigger id="tax-regime" className="bg-background">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="micro">Régime Micro (CA &lt; 10M FCFA)</SelectItem>
                    <SelectItem value="simplifie">Réel Simplifié (10M - 100M FCFA)</SelectItem>
                    <SelectItem value="normal">Réel Normal (CA &gt; 100M FCFA)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="start-date">Date de début d'activité *</Label>
                <Input 
                  id="start-date" 
                  type="date"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fiscal-year">Exercice fiscal</Label>
                <Select>
                  <SelectTrigger id="fiscal-year" className="bg-background">
                    <SelectValue placeholder="Année civile" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="civil">Année civile (Jan - Déc)</SelectItem>
                    <SelectItem value="custom">Exercice décalé</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accounting-method">Méthode comptable</Label>
                <Select>
                  <SelectTrigger id="accounting-method" className="bg-background">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Comptabilité de trésorerie</SelectItem>
                    <SelectItem value="accrual">Comptabilité d'engagement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Card className="bg-primary-light border-primary/20">
              <CardContent className="pt-4">
                <div className="flex gap-3">
                  <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-foreground">
                    <p className="font-semibold mb-1">Le régime simplifié est recommandé</p>
                    <p className="text-muted-foreground">
                      Basé sur votre secteur d'activité et chiffre d'affaires estimé, le régime réel simplifié offre le meilleur équilibre entre obligations et avantages fiscaux.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* TVA Configuration */}
        <Card className="border-border shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Percent className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <CardTitle>Configuration TVA</CardTitle>
                <CardDescription>Paramètres de la Taxe sur la Valeur Ajoutée</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="space-y-1">
                <Label htmlFor="tva-enabled" className="text-base font-semibold">
                  Assujetti à la TVA
                </Label>
                <p className="text-sm text-muted-foreground">
                  Votre entreprise collecte et déclare la TVA
                </p>
              </div>
              <Switch id="tva-enabled" defaultChecked />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="tva-rate">Taux de TVA standard *</Label>
                <Select defaultValue="19.25">
                  <SelectTrigger id="tva-rate" className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="19.25">19,25% (Taux normal)</SelectItem>
                    <SelectItem value="0">0% (Exonéré)</SelectItem>
                    <SelectItem value="custom">Taux spécifique</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tva-period">Périodicité déclaration *</Label>
                <Select>
                  <SelectTrigger id="tva-period" className="bg-background">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Mensuelle (recommandé)</SelectItem>
                    <SelectItem value="quarterly">Trimestrielle</SelectItem>
                    <SelectItem value="annual">Annuelle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tva-date">Jour limite déclaration</Label>
                <Input 
                  id="tva-date" 
                  type="number"
                  min="1"
                  max="31"
                  placeholder="15"
                  className="bg-background"
                />
                <p className="text-xs text-muted-foreground">Jour du mois (généralement le 15)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tva-number">Numéro TVA</Label>
                <Input 
                  id="tva-number" 
                  placeholder="CM-XXXXXXXXXX"
                  className="bg-background"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* IS Configuration */}
        <Card className="border-border shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Calculator className="h-6 w-6 text-accent" />
              </div>
              <div>
                <CardTitle>Impôt sur les Sociétés (IS)</CardTitle>
                <CardDescription>Configuration IS et autres impôts</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="is-rate">Taux IS applicable</Label>
                <Select defaultValue="30">
                  <SelectTrigger id="is-rate" className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30% (Taux normal)</SelectItem>
                    <SelectItem value="25">25% (PME éligibles)</SelectItem>
                    <SelectItem value="33">33% (Secteur pétrolier)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="is-period">Périodicité IS</Label>
                <Select defaultValue="quarterly">
                  <SelectTrigger id="is-period" className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quarterly">Acomptes trimestriels</SelectItem>
                    <SelectItem value="annual">Déclaration annuelle uniquement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <div className="flex items-center space-x-2">
                  <Switch id="irpp-enabled" />
                  <Label htmlFor="irpp-enabled">Déclaration IRPP (Impôt sur le Revenu)</Label>
                </div>
                <p className="text-xs text-muted-foreground ml-7">
                  Pour les entreprises individuelles et revenus salariaux
                </p>
              </div>

              <div className="space-y-2 md:col-span-2">
                <div className="flex items-center space-x-2">
                  <Switch id="patents-enabled" />
                  <Label htmlFor="patents-enabled">Patente et Licences</Label>
                </div>
                <p className="text-xs text-muted-foreground ml-7">
                  Contribution des patentes selon activité
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Declaration Schedule */}
        <Card className="border-border shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-success" />
              </div>
              <div>
                <CardTitle>Calendrier des déclarations</CardTitle>
                <CardDescription>Récapitulatif de vos échéances fiscales</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-success-light rounded-lg">
                <div>
                  <p className="font-semibold text-foreground">TVA Mensuelle</p>
                  <p className="text-sm text-muted-foreground">Le 15 de chaque mois</p>
                </div>
                <span className="text-xs font-medium text-success">Configuré</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-success-light rounded-lg">
                <div>
                  <p className="font-semibold text-foreground">IS Trimestriel</p>
                  <p className="text-sm text-muted-foreground">Mars, Juin, Sept, Déc</p>
                </div>
                <span className="text-xs font-medium text-success">Configuré</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-semibold text-foreground">Déclaration annuelle</p>
                  <p className="text-sm text-muted-foreground">31 Mars N+1</p>
                </div>
                <span className="text-xs font-medium text-muted-foreground">Automatique</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex-1">
            Précédent
          </Button>
          <Button className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground">
            Suivant : Catégories comptables
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaxConfiguration;
