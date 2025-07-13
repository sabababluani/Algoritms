# Spam Email Marker

## Task Description

You are given a list of emails.  
Your task is to **iterate through each email** and **mark the ones that contain blocked words** as spam.

## Blocked Words

The user has defined the following list of blocked words:

- `coffee`
- `bug`
- `deadline`

> The check should be **case-insensitive** and should match words **anywhere in the email fields**.

## Email Format

Each email is an object with the following structure:

````javascript
{
  from: 'alice@coffee.com',
  to: 'bob@code.com',
  subject: 'Urgent Meeting Required',
  body: 'We need to discuss the project milestones.'
}
```

If any of the fields (from, to, subject, or body) contain any of the blocked words, mark the email as spam by adding:

spam: true

Example Output

```javascipt
{
  from: 'alice@coffee.com',
  to: 'bob@code.com',
  subject: 'Urgent Meeting Required',
  body: 'We need to discuss the project milestones.',
  spam: true
}
````

Goal

    Identify emails that contain unwanted or suspicious content.

    Add a spam: true property to those email objects.

Instructions

    Loop through each email in the list.

    Check all relevant fields (from, to, subject, body).

    If any blocked word is found, mark the email as spam.
