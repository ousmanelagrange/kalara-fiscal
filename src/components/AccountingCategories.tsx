import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, Plus, Check, Settings } from "lucide-react";

const AccountingCategories = () => {
  const defaultCategories = [
    { code: "701", name: "Ventes de marchandises", type: "Produits", status: "active" },
    { code: "706", name: "Prestations de services", type: "Produits", status: "active" },
    { code: "601", name: "Achats de marchandises", type: "Charges", status: "active" },
    { code: "604", name: "Achats stockés - Matières", type: "Charges", status: "active" },
    { code: "605", name: "Autres achats", type: "Charges", status: "active" },
    { code: "622", name: "Rémunérations du personnel", type: "Charges", status: "active" },
    { code: "624", name: "Transport", type: "Charges", status: "active" },
    { code: "626", name: "Frais postaux", type: "Charges", status: "active" },
    { code: "628", name: "Frais de télécommunications", type: "Charges", status: "active" },
    { code: "631", name: "Impôts et taxes", type: "Charges", status: "active" },
  ];

  const customCategories = [
    { code: "CUST01", name: "Marketing digital", type: "Charges", status: "custom" },
    { code: "CUST02", name: "Frais bancaires", type: "Charges", status: "custom" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Progress */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Catégories comptables</h1>
              <p className="text-muted-foreground">Organisez vos comptes pour la déclaration</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Progression</p>
              <p className="text-2xl font-bold text-primary">85%</p>
            </div>
          </div>
          <Progress value={85} className="h-2" />
        </div>

        {/* Info Card */}
        <Card className="bg-primary-light border-primary/20">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <FolderOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">
                  Catégories pré-configurées
                </p>
                <p className="text-sm text-muted-foreground">
                  Nous avons créé les catégories comptables standards selon le plan comptable OHADA. Vous pouvez les personnaliser selon vos besoins.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Setup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-success/20 hover:border-success transition-colors cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 text-success" />
              </div>
              <p className="font-semibold text-foreground mb-1">Commerce</p>
              <p className="text-xs text-muted-foreground">Achat/Revente marchandises</p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary transition-colors cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                <Settings className="h-6 w-6 text-secondary" />
              </div>
              <p className="font-semibold text-foreground mb-1">Services</p>
              <p className="text-xs text-muted-foreground">Prestations intellectuelles</p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent transition-colors cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <FolderOpen className="h-6 w-6 text-accent" />
              </div>
              <p className="font-semibold text-foreground mb-1">Production</p>
              <p className="text-xs text-muted-foreground">Fabrication et transformation</p>
            </CardContent>
          </Card>
        </div>

        {/* Default Categories */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Comptes OHADA standards</CardTitle>
                <CardDescription>Plan comptable de base activé</CardDescription>
              </div>
              <Badge variant="outline" className="bg-success-light text-success border-success">
                <Check className="h-3 w-3 mr-1" />
                10 comptes actifs
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {defaultCategories.map((cat, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-16 h-10 rounded bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{cat.code}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{cat.name}</p>
                      <p className="text-xs text-muted-foreground">{cat.type}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs bg-success-light text-success border-success/30">
                    Actif
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Custom Categories */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Catégories personnalisées</CardTitle>
                <CardDescription>Ajoutez vos propres catégories spécifiques</CardDescription>
              </div>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {customCategories.length > 0 ? (
              <div className="space-y-2 mb-4">
                {customCategories.map((cat, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 border border-dashed rounded-lg"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-16 h-10 rounded bg-secondary/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-secondary">{cat.code}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{cat.name}</p>
                        <p className="text-xs text-muted-foreground">{cat.type}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Modifier</Button>
                  </div>
                ))}
              </div>
            ) : null}

            <Card className="border-dashed bg-muted/30">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="custom-code">Code catégorie</Label>
                      <Input 
                        id="custom-code" 
                        placeholder="Ex: CUST03"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-name">Nom de la catégorie</Label>
                      <Input 
                        id="custom-name" 
                        placeholder="Ex: Publicité Facebook"
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Créer la catégorie
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="bg-success-light border-success/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-success flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-2">
                  Configuration comptable prête
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Vous avez configuré <strong>12 catégories</strong> (10 standards + 2 personnalisées). Votre système est prêt pour la saisie des transactions.
                </p>
                <div className="flex gap-2 text-xs">
                  <Badge variant="outline" className="bg-background">10 Produits</Badge>
                  <Badge variant="outline" className="bg-background">2 Charges</Badge>
                </div>
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
            Terminer la configuration
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountingCategories;
