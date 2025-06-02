import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Jia Xian - Contact");
  }

  ngOnInit(): void {
    const form: HTMLFormElement | null = document.getElementById("form") as HTMLFormElement;
    const result: HTMLElement | null = document.getElementById("result") as HTMLElement;

    const firstNameInput: HTMLInputElement | null = document.getElementById("first_name") as HTMLInputElement;
    const lastNameInput: HTMLInputElement | null = document.getElementById("lname") as HTMLInputElement;
    const emailInput: HTMLInputElement | null = document.getElementById("email") as HTMLInputElement;
    const phoneInput: HTMLInputElement | null = document.getElementById("phone") as HTMLInputElement;
    const messageInput: HTMLTextAreaElement | null = document.getElementById("message") as HTMLTextAreaElement;

    if (form && result && firstNameInput && lastNameInput && emailInput && phoneInput && messageInput) {
      form.addEventListener("submit", function (e: Event) {
        e.preventDefault();

        let isValid = false;

        // Validate First Name
        if (firstNameInput.value.trim() === "" || firstNameInput.value === null || firstNameInput.value === undefined || firstNameInput.value === " ") {
          isValid = false;
          firstNameInput.classList.add("invalid");
          document.getElementById("first-name-empty-feedback")!.style.display = "block";
          document.getElementById("first-name-invalid-feedback")!.style.display = "none";
        }
        else if (firstNameInput.value.length < 2 || firstNameInput.value.length > 20) {
          isValid = false;
          firstNameInput.classList.add("invalid");
          document.getElementById("first-name-invalid-feedback")!.style.display = "block";
          document.getElementById("first-name-empty-feedback")!.style.display = "none";
        }
        else if (!/^[a-zA-Z]+$/.test(firstNameInput.value.trim())) {
          isValid = false;
          firstNameInput.classList.add("invalid");
          document.getElementById("first-name-invalid-feedback")!.style.display = "block";
          document.getElementById("first-name-empty-feedback")!.style.display = "none";
        }
        else {
          isValid = true;
          firstNameInput.classList.remove("invalid");
          document.getElementById("first-name-invalid-feedback")!.style.display = "none";
          document.getElementById("first-name-empty-feedback")!.style.display = "none";
        }

        // Validate Last Name
        if (lastNameInput.value.trim() === "" || lastNameInput.value === null || lastNameInput.value === undefined || lastNameInput.value === " ") {
          isValid = false;
          lastNameInput.classList.add("invalid");
          document.getElementById("last-name-empty-feedback")!.style.display = "block";
          document.getElementById("last-name-invalid-feedback")!.style.display = "none";
        }
        else if (lastNameInput.value.length < 2 || lastNameInput.value.length > 20) {
          isValid = false;
          lastNameInput.classList.add("invalid");
          document.getElementById("last-name-invalid-feedback")!.style.display = "block";
          document.getElementById("last-name-empty-feedback")!.style.display = "none";
        }
        else if (!/^[a-zA-Z]+$/.test(lastNameInput.value.trim())) {
          isValid = false;
          lastNameInput.classList.add("invalid");
          document.getElementById("last-name-invalid-feedback")!.style.display = "block";
          document.getElementById("last-name-empty-feedback")!.style.display = "none";
        }
        else {
          isValid = true;
          lastNameInput.classList.remove("invalid");
          document.getElementById("last-name-invalid-feedback")!.style.display = "none";
          document.getElementById("last-name-empty-feedback")!.style.display = "none";
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          isValid = false;
          emailInput.classList.add("invalid");
          document.getElementById("email-invalid-feedback")!.style.display = "block";
        }
        else if (emailInput.value.trim() === "" || emailInput.value === null || emailInput.value === undefined || emailInput.value === " ") {
          isValid = false;
          emailInput.classList.add("invalid");
          document.getElementById("email-empty-feedback")!.style.display = "block";
          document.getElementById("email-invalid-feedback")!.style.display = "none";
        }
        else if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
          isValid = false;
          emailInput.classList.add("invalid");
          document.getElementById("email-invalid-feedback")!.style.display = "block";
          document.getElementById("email-empty-feedback")!.style.display = "none";
        }
        else if (emailInput.value.length < 5) {
          isValid = false;
          emailInput.classList.add("invalid");
          document.getElementById("email-invalid-feedback")!.style.display = "block";
          document.getElementById("email-empty-feedback")!.style.display = "none";
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value.trim())) {
          isValid = false;
          emailInput.classList.add("invalid");
          document.getElementById("email-invalid-feedback")!.style.display = "block";
          document.getElementById("email-empty-feedback")!.style.display = "none";
        }
        else {
          isValid = true;
          emailInput.classList.remove("invalid");
          document.getElementById("email-invalid-feedback")!.style.display = "none";
          document.getElementById("email-empty-feedback")!.style.display = "none";
        }

        // Validate Phone
        const phoneRegex = /^\(\d{3}\) \d{3} \d{4}$/; // Allow numbers, spaces, parentheses, and dashes
        if (phoneInput.value.trim() === "" || phoneInput.value === null || phoneInput.value === undefined || phoneInput.value === " ") {
          isValid = false;
          phoneInput.classList.add("invalid");
          document.getElementById("phone-empty-feedback")!.style.display = "block";
          document.getElementById("phone-invalid-feedback")!.style.display = "none";
        }
        else if (!/^\d+$/.test(phoneInput.value.trim())) {
          isValid = false;
          phoneInput.classList.add("invalid");
          document.getElementById("phone-empty-feedback")!.style.display = "block";
          document.getElementById("phone-invalid-feedback")!.style.display = "none";
        }
        else if (phoneInput.value.length <= 9 || phoneInput.value.length >= 11) {
          isValid = false;
          phoneInput.classList.add("invalid");
          document.getElementById("phone-empty-feedback")!.style.display = "block";
          document.getElementById("phone-invalid-feedback")!.style.display = "none";
        }
        else {
          isValid = true;
          phoneInput.classList.remove("invalid");
          document.getElementById("phone-invalid-feedback")!.style.display = "none";
          document.getElementById("phone-empty-feedback")!.style.display = "none";
        }

        // Validate Message
        if (messageInput.value.trim() === "" || firstNameInput.value === null || firstNameInput.value === undefined || firstNameInput.value === " ") {
          isValid = false;
          messageInput.classList.add("invalid");
          document.getElementById("message-empty-feedback")!.style.display = "block";
          document.getElementById("message-invalid-feedback")!.style.display = "none";
        } else if (messageInput.value.length < 50) {
          isValid = false;
          messageInput.classList.add("invalid");
          document.getElementById("message-invalid-feedback")!.style.display = "block";
          document.getElementById("message-empty-feedback")!.style.display = "none";
        } else if (!/^[a-zA-Z0-9\s.,!?'"-]+$/.test(messageInput.value.trim())) {
          isValid = false;
          messageInput.classList.add("invalid");
          document.getElementById("message-invalid-feedback")!.style.display = "block";
          document.getElementById("message-empty-feedback")!.style.display = "none";
        } else {
          isValid = true;
          messageInput.classList.remove("invalid");
          document.getElementById("message-invalid-feedback")!.style.display = "none";
          document.getElementById("message-empty-feedback")!.style.display = "none";
        }

        // If all inputs are valid, proceed with form submission
        if (isValid) {
          const formData: FormData = new FormData(form);
          const object: Record<string, string> = {};

          formData.forEach((value: FormDataEntryValue, key: string) => {
            object[key] = value.toString();
          });

          const json: string = JSON.stringify(object);
          result.innerHTML = "Please wait...";

          fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          })
            .then(async (response: Response) => {
              const jsonResponse = await response.json();
              if (response.status === 200) {
                result.innerHTML = jsonResponse.message;
                result.classList.remove("text-gray-500");
                result.classList.add("text-green-500");
              } else {
                console.error("Error response:", response);
                result.innerHTML = jsonResponse.message || "Failed to send the form.";
                result.classList.remove("text-gray-500");
                result.classList.add("text-red-500");
              }
            })
            .catch((error: Error) => {
              console.error("Fetch error:", error);
              result.innerHTML = "An error occurred while sending the form. Please try again.";
              result.classList.remove("text-gray-500");
              result.classList.add("text-red-500");
            })
            .finally(() => {
              form.reset();
              setTimeout(() => {
                if (result) {
                  result.style.display = "none";
                }
              }, 5000);
            });
        }
      });
    }
  }
}
