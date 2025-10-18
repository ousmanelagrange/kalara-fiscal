import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Check } from "lucide-react";

const CompanySetup = () => {
  const steps = [
    { id: 1, name: "Informations", completed: true },
    { id: 2, name: "Régime fiscal", completed: false },
    { id: 3, name: "TVA", completed: false },
    { id: 4, name: "Confirmation", completed: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Building2 className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Configuration de votre entreprise</h1>
          <p className="text-muted-foreground">Paramétrez votre profil fiscal en quelques étapes</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    step.completed 
                      ? "bg-success text-success-foreground" 
                      : step.id === 2 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.completed ? <Check className="h-5 w-5" /> : step.id}
                </div>
                <span className="text-xs mt-2 text-muted-foreground">{step.name}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={`h-1 flex-1 mx-2 rounded ${step.completed ? "bg-success" : "bg-muted"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <Card className="border-border shadow-xl">
          <CardHeader>
            <CardTitle>Régime fiscal</CardTitle>
            <CardDescription>Sélectionnez votre statut et régime d'imposition</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="status">Statut juridique</Label>
                <Select>
                  <SelectTrigger id="status" className="bg-background">
                    <SelectValue placeholder="Sélectionnez un statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto-entrepreneur</SelectItem>
                    <SelectItem value="sarl">SARL</SelectItem>
                    <SelectItem value="sa">SA</SelectItem>
                    <SelectItem value="ei">Entreprise Individuelle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="regime">Régime fiscal</Label>
                <Select>
                  <SelectTrigger id="regime" className="bg-background">
                    <SelectValue placeholder="Choisissez le régime" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="micro">Régime Micro</SelectItem>
                    <SelectItem value="simplifie">Réel Simplifié</SelectItem>
                    <SelectItem value="normal">Réel Normal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="niu">Numéro NIU</Label>
                <Input 
                  id="niu" 
                  placeholder="M051234567890A" 
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="period">Périodicité déclaration</Label>
                <Select>
                  <SelectTrigger id="period" className="bg-background">
                    <SelectValue placeholder="Fréquence" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mensuelle">Mensuelle</SelectItem>
                    <SelectItem value="trimestrielle">Trimestrielle</SelectItem>
                    <SelectItem value="annuelle">Annuelle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="activity">Secteur d'activité</Label>
              <Select>
                <SelectTrigger id="activity" className="bg-background">
                  <SelectValue placeholder="Sélectionnez votre secteur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="commerce">Commerce</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="production">Production</SelectItem>
                  <SelectItem value="import">Import/Export</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t">
              <Button variant="outline" className="flex-1">
                Précédent
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground">
                Suivant
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Info Alert */}
        <Card className="bg-primary-light border-primary/20">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Configuration sécurisée</p>
                <p className="text-sm text-muted-foreground">
                  Vos informations fiscales sont chiffrées et conformes aux normes DGI du Cameroun.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanySetup;
