import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Building2, MapPin, Phone, Mail, User, Briefcase } from "lucide-react";

const ProfileCompletion = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Progress Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Profil de l'entreprise</h1>
              <p className="text-muted-foreground">Complétez les informations de votre entreprise</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Progression</p>
              <p className="text-2xl font-bold text-primary">35%</p>
            </div>
          </div>
          <Progress value={35} className="h-2" />
        </div>

        {/* Main Form */}
        <Card className="border-border shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Informations légales</CardTitle>
                <CardDescription>Renseignez les données officielles de votre entreprise</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="company-name" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  Raison sociale *
                </Label>
                <Input 
                  id="company-name" 
                  placeholder="Ex: SARL Kalar Technologies"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="niu" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  Numéro NIU *
                </Label>
                <Input 
                  id="niu" 
                  placeholder="M051234567890A"
                  className="bg-background"
                />
                <p className="text-xs text-muted-foreground">Numéro d'Identification Unique DGI</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rccm">Numéro RCCM</Label>
                <Input 
                  id="rccm" 
                  placeholder="RC/DLA/2024/B/1234"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="legal-form">Forme juridique *</Label>
                <Select>
                  <SelectTrigger id="legal-form" className="bg-background">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto-entrepreneur</SelectItem>
                    <SelectItem value="ei">Entreprise Individuelle</SelectItem>
                    <SelectItem value="sarl">SARL</SelectItem>
                    <SelectItem value="sa">SA</SelectItem>
                    <SelectItem value="sas">SAS</SelectItem>
                    <SelectItem value="suarl">SUARL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="activity-sector">Secteur d'activité *</Label>
                <Select>
                  <SelectTrigger id="activity-sector" className="bg-background">
                    <SelectValue placeholder="Choisissez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="commerce">Commerce général</SelectItem>
                    <SelectItem value="services">Prestations de services</SelectItem>
                    <SelectItem value="production">Production/Fabrication</SelectItem>
                    <SelectItem value="import">Import/Export</SelectItem>
                    <SelectItem value="btp">BTP</SelectItem>
                    <SelectItem value="transport">Transport</SelectItem>
                    <SelectItem value="tech">Technologies</SelectItem>
                    <SelectItem value="agro">Agroalimentaire</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="activity-description">Description de l'activité</Label>
                <Textarea 
                  id="activity-description" 
                  placeholder="Décrivez brièvement votre activité principale..."
                  className="bg-background min-h-[80px]"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact & Location */}
        <Card className="border-border shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <CardTitle>Coordonnées</CardTitle>
                <CardDescription>Adresse et contacts de l'entreprise</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-secondary" />
                  Adresse complète *
                </Label>
                <Input 
                  id="address" 
                  placeholder="Ex: Avenue Kennedy, Immeuble Central"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Ville *</Label>
                <Select>
                  <SelectTrigger id="city" className="bg-background">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="douala">Douala</SelectItem>
                    <SelectItem value="yaounde">Yaoundé</SelectItem>
                    <SelectItem value="bafoussam">Bafoussam</SelectItem>
                    <SelectItem value="garoua">Garoua</SelectItem>
                    <SelectItem value="bamenda">Bamenda</SelectItem>
                    <SelectItem value="maroua">Maroua</SelectItem>
                    <SelectItem value="ngaoundere">Ngaoundéré</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="postal-code">Code postal</Label>
                <Input 
                  id="postal-code" 
                  placeholder="Ex: BP 1234"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  Téléphone *
                </Label>
                <Input 
                  id="phone" 
                  type="tel"
                  placeholder="+237 6XX XX XX XX"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-secondary" />
                  Email professionnel *
                </Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="contact@entreprise.cm"
                  className="bg-background"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Representative */}
        <Card className="border-border shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <User className="h-6 w-6 text-accent" />
              </div>
              <div>
                <CardTitle>Représentant légal</CardTitle>
                <CardDescription>Informations du gérant ou dirigeant</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="rep-lastname">Nom *</Label>
                <Input 
                  id="rep-lastname" 
                  placeholder="Nom du représentant"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rep-firstname">Prénom(s) *</Label>
                <Input 
                  id="rep-firstname" 
                  placeholder="Prénom(s)"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rep-function">Fonction</Label>
                <Select>
                  <SelectTrigger id="rep-function" className="bg-background">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gerant">Gérant</SelectItem>
                    <SelectItem value="dg">Directeur Général</SelectItem>
                    <SelectItem value="president">Président</SelectItem>
                    <SelectItem value="admin">Administrateur</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rep-phone">Téléphone</Label>
                <Input 
                  id="rep-phone" 
                  type="tel"
                  placeholder="+237 6XX XX XX XX"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="rep-email">Email</Label>
                <Input 
                  id="rep-email" 
                  type="email"
                  placeholder="representant@entreprise.cm"
                  className="bg-background"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex-1">
            Enregistrer le brouillon
          </Button>
          <Button className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground">
            Suivant : Configuration fiscale
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          * Champs obligatoires • Vos données sont sécurisées et conformes aux normes DGI
        </p>
      </div>
    </div>
  );
};

export default ProfileCompletion;
