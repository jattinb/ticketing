# Ticketing
Backend heavy ticketing site built using microservices

## Features

### Auth:
1. User Sign up
2. User Sign in
3. User Sign out

### Tickets:
1. Create Ticket
2. Update Ticket
3. Show specific ticket details
4. Show all available tickets

### Orders:
1. Create Order
2. Delete Order
3. Show Order details
4. Show a list of all Orders

### Payment:
1. Payment of an order via stripe

### Expiration:
1. Order expires after a fixed time if payment is not complete

### Frontend:
1. Basic barebones react app


## Error response structure:
```
{
    errors: {
        message: string, field?:string
    }
}[]
```
