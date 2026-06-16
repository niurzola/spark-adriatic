"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      await emailjs.send(
        "service_mt04lxm",
        "template_5o0h5ud",
        {
          first_name: `${form.firstName}`,
          last_name: `${form.lastName}`,
          email: form.email,
          message: form.message,
        },
        "9j3yjMfb_wSsn86fv",
      );
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error: any) {
      console.log("EmailJS error:", error);
      console.log("Error text:", error?.text);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center px-10">
      <h1 className="scroll-m-20 text-8xl font-extrabold tracking-tight text-center">
        Contact Us
      </h1>
      <FieldSet className="w-full max-w-4xl mt-10">
        <FieldGroup>
          <div className="flex gap-6">
            <Field className="flex-1">
              <Input
                placeholder="First name"
                className="h-14 text-lg"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />
            </Field>
            <Field className="flex-1">
              <Input
                placeholder="Last Name"
                className="h-14 text-lg"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </Field>
          </div>
          <Field>
            <Input
              type="email"
              placeholder="Email"
              className="h-14 text-lg"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </Field>
          <Field>
            <Textarea
              placeholder="Message"
              rows={10}
              className="text-lg"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </Field>
        </FieldGroup>
      </FieldSet>

      {status === "success" && (
        <p className="mt-4 text-green-500">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-500">Something went wrong. Try again.</p>
      )}

      <Button
        className="mt-10 px-16 py-6 text-xl h-auto"
        variant="outline"
        onClick={handleSubmit}
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </Button>
    </div>
  );
}
