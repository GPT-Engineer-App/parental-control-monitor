import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const addContact = (data) => {
    setContacts([...contacts, { ...data, id: Date.now() }]);
    reset();
    toast("Contact added successfully");
  };

  const editContact = (data) => {
    setContacts(contacts.map(contact => contact.id === selectedContact.id ? { ...data, id: contact.id } : contact));
    setSelectedContact(null);
    setIsEditing(false);
    reset();
    toast("Contact updated successfully");
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    toast("Contact deleted successfully");
  };

  const onSubmit = (data) => {
    if (isEditing) {
      editContact(data);
    } else {
      addContact(data);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="primary">Add Contact</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Contact" : "Add Contact"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} defaultValue={selectedContact?.name || ""} />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" {...register("email")} defaultValue={selectedContact?.email || ""} />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...register("phone")} defaultValue={selectedContact?.phone || ""} />
              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            </div>
            <Button type="submit">{isEditing ? "Update Contact" : "Add Contact"}</Button>
          </form>
        </DialogContent>
      </Dialog>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {contacts.map(contact => (
          <Card key={contact.id}>
            <CardHeader>
              <CardTitle>{contact.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => { setSelectedContact(contact); setIsEditing(true); }}>Edit</Button>
              <Button variant="destructive" onClick={() => deleteContact(contact.id)}>Delete</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Contacts;