# API Documentation

## User Registration

### POST /users/register

Register a new user in the system.

#### Request Body

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "phone": "string"
}
```

#### Required Fields

- `name`: User's full name
- `email`: Valid email address
- `password`: Password (minimum 6 characters)
- `phone`: Valid phone number

#### Response Status Codes

- `201 Created`: User successfully registered
- `400 Bad Request`: Invalid input data
- `409 Conflict`: Email already exists
- `500 Internal Server Error`: Server error

#### Example Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890"
}
```

#### Example Success Response (201 Created)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "createdAt": "2023-12-20T10:00:00.000Z",
    "updatedAt": "2023-12-20T10:00:00.000Z"
  }
}
```

#### Example Error Responses

Invalid Input (400 Bad Request):

```json
{
  "errors": [
    {
      "msg": "Email is required",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

Email Already Exists (409 Conflict):

```json
{
  "error": "Email already registered",
  "code": "USER_EXISTS"
}
```

Server Error (500 Internal Server Error):

```json
{
  "error": "Internal server error",
  "code": "SERVER_ERROR"
}
```

## User Login

### POST /users/login

Authenticate a user and receive an access token.

#### Request Body

```json
{
  "email": "string",
  "password": "string"
}
```

#### Required Fields

- `email`: Valid email address
- `password`: Password (minimum 6 characters)

#### Response Status Codes

- `200 OK`: Login successful
- `400 Bad Request`: Invalid input data
- `401 Unauthorized`: Invalid credentials
- `500 Internal Server Error`: Server error

#### Example Request

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Example Success Response (200 OK)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "createdAt": "2023-12-20T10:00:00.000Z",
    "updatedAt": "2023-12-20T10:00:00.000Z"
  }
}
```

#### Example Error Responses

Invalid Input (400 Bad Request):

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

Invalid Credentials (401 Unauthorized):

```json
{
  "message": "Invalid email or password"
}
```

Server Error (500 Internal Server Error):

```json
{
  "error": "Internal server error",
  "code": "SERVER_ERROR"
}
```

## Get User Profile

### GET /users/profile

Get the authenticated user's profile information.

#### Headers Required

- `Authorization`: Bearer token received from login

#### Response Status Codes

- `200 OK`: Profile retrieved successfully
- `401 Unauthorized`: Invalid or missing token
- `500 Internal Server Error`: Server error

#### Example Success Response (200 OK)

```json
{
  "id": "507f1f77bcf86cd799439011",
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "createdAt": "2023-12-20T10:00:00.000Z",
  "updatedAt": "2023-12-20T10:00:00.000Z"
}
```

#### Example Error Response

Unauthorized (401 Unauthorized):

```json
{
  "message": "Authentication required"
}
```

## Logout User

### GET /users/logout

Logout the currently authenticated user and invalidate the token.

#### Headers Required

- `Authorization`: Bearer token received from login

#### Response Status Codes

- `200 OK`: Successfully logged out
- `401 Unauthorized`: Invalid or missing token
- `500 Internal Server Error`: Server error

#### Example Success Response (200 OK)

```json
{
  "message": "Logged out"
}
```

#### Example Error Response

Unauthorized (401 Unauthorized):

```json
{
  "message": "Authentication required"
}
```

## Captain Registration

### POST /captains/register

Register a new captain (driver) in the system.

#### Request Body

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": "number",
    "vehicleType": "car" | "motorcycle" | "auto"
  }
}
```

#### Required Fields

- `fullname.firstname`: Captain's first name (minimum 3 characters)
- `email`: Valid email address
- `password`: Password (minimum 6 characters)
- `vehicle.color`: Vehicle color (minimum 3 characters)
- `vehicle.plate`: Vehicle plate number (minimum 3 characters)
- `vehicle.capacity`: Vehicle passenger capacity (minimum 1)
- `vehicle.vehicleType`: Type of vehicle (must be one of: car, motorcycle, auto)

#### Response Status Codes

- `201 Created`: Captain successfully registered
- `400 Bad Request`: Invalid input data
- `409 Conflict`: Email already exists
- `500 Internal Server Error`: Server error

#### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Smith"
  },
  "email": "john.smith@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Example Success Response (201 Created)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "john.smith@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "createdAt": "2023-12-20T10:00:00.000Z",
    "updatedAt": "2023-12-20T10:00:00.000Z"
  }
}
```

#### Example Error Responses

Invalid Input (400 Bad Request):

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

Email Already Exists (409 Conflict):

```json
{
  "error": "Email already registered",
  "code": "CAPTAIN_EXISTS"
}
```

Server Error (500 Internal Server Error):

```json
{
  "error": "Internal server error",
  "code": "SERVER_ERROR"
}
```

# Captain API Routes

## Register Captain

### POST /captains/register

```json
// Request Body
{
  "fullname": {
    "firstname": "string", // min 3 characters
    "lastname": "string"   // optional
  },
  "email": "string",      // must be valid email format
  "password": "string",   // min 6 characters
  "vehicle": {
    "color": "string",    // min 3 characters
    "plate": "string",    // min 3 characters
    "capacity": 4,        // min 1
    "vehicleType": "car"  // must be one of: "car", "motorcycle", "auto"
  }
}

// Success Response - 201 Created
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "john.smith@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "createdAt": "2023-12-20T10:00:00.000Z",
    "updatedAt": "2023-12-20T10:00:00.000Z"
  }
}

// Error Response - 400 Bad Request
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

## Login Captain

### POST /captains/login

```json
// Request Body
{
  "email": "string",    // must be valid email format
  "password": "string"  // min 6 characters
}

// Success Response - 200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "john.smith@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "createdAt": "2023-12-20T10:00:00.000Z",
    "updatedAt": "2023-12-20T10:00:00.000Z"
  }
}

// Error Response - 401 Unauthorized
{
  "message": "Invalid email or password"
}
```

## Get Captain Profile

### GET /captains/profile

```json
// Headers Required
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."  // JWT token received from login
}

// Success Response - 200 OK
{
  "captain": {
    "id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "john.smith@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "createdAt": "2023-12-20T10:00:00.000Z",
    "updatedAt": "2023-12-20T10:00:00.000Z"
  }
}

// Error Response - 401 Unauthorized
{
  "message": "Authentication required"
}
```

## Logout Captain

### GET /captains/logout

```json
// Headers Required
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."  // JWT token received from login
}

// Success Response - 200 OK
{
  "message": "Logout successfully"
}

// Error Response - 401 Unauthorized
{
  "message": "Authentication required"
}
```
