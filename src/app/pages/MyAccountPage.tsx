import { useState } from "react";
import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { User, Save, BookOpen, Package, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const mockDrafts = [
  {
    id: "1",
    title: "Jeju Island Escape",
    lastEdited: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1680002529460-b6b5acf0aa37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwa29yZWElMjBuYXR1cmV8ZW58MXx8fHwxNzczNjU5Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    photos: 45,
  },
];

export function MyAccountPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [email, setEmail] = useState("john.smith@example.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");

  const handleSave = () => {
    toast.success("Account settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl tracking-tight mb-4">My Account</h1>
          <p className="text-xl text-gray-600">
            Manage your account settings and saved drafts
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="profile" className="px-6 py-3">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="drafts" className="px-6 py-3">
              <BookOpen className="w-4 h-4 mr-2" />
              Saved Drafts
            </TabsTrigger>
            <TabsTrigger value="addresses" className="px-6 py-3">
              <Package className="w-4 h-4 mr-2" />
              Addresses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white">
              <h3 className="text-2xl mb-6">Profile Information</h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="mb-2 block">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="rounded-xl py-6"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="mb-2 block">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="rounded-xl py-6"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl py-6"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl py-6"
                  />
                </div>

                <Separator />

                <div>
                  <h4 className="text-lg mb-4">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentPassword" className="mb-2 block">
                        Current Password
                      </Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        className="rounded-xl py-6"
                      />
                    </div>
                    <div>
                      <Label htmlFor="newPassword" className="mb-2 block">
                        New Password
                      </Label>
                      <Input
                        id="newPassword"
                        type="password"
                        className="rounded-xl py-6"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword" className="mb-2 block">
                        Confirm New Password
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        className="rounded-xl py-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={handleSave}
                    className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="drafts">
            {mockDrafts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {mockDrafts.map((draft) => (
                  <Card
                    key={draft.id}
                    className="p-6 border-0 shadow-lg rounded-2xl bg-white hover:shadow-xl transition-shadow"
                  >
                    <div className="aspect-[3/2] rounded-xl overflow-hidden mb-4 shadow-md">
                      <ImageWithFallback
                        src={draft.image}
                        alt={draft.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl mb-2">{draft.title}</h3>
                    <div className="text-sm text-gray-600 mb-4">
                      {draft.photos} photos • Last edited {draft.lastEdited}
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        onClick={() => navigate("/edit")}
                        className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-full"
                      >
                        Continue Editing
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-16 border-0 shadow-lg rounded-2xl bg-white text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-gray-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl mb-3">No saved drafts</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Start creating a photobook and save your progress to continue
                  later.
                </p>
                <Button
                  onClick={() => navigate("/upload")}
                  className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8"
                >
                  Create New Book
                </Button>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="addresses">
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-lg rounded-2xl bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl mb-2">Default Shipping Address</h3>
                    <div className="text-gray-600">
                      <div>John Smith</div>
                      <div>123 Main Street</div>
                      <div>New York, NY 10001</div>
                      <div>United States</div>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-full">
                    Edit
                  </Button>
                </div>
              </Card>

              <Button
                variant="outline"
                className="w-full py-6 text-lg rounded-full border-2 border-dashed"
              >
                Add New Address
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
