# ViacepAddressLookup SDK

Look up Brazilian postal codes (CEP) and resolve them to street, neighborhood, city and state

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About ViaCEP Address Lookup

[ViaCEP](https://viacep.com.br/) is a free Brazilian web service for looking up postal codes (*Código de Endereçamento Postal*, or CEP) and resolving them to a structured postal address. It is widely used in Brazilian e-commerce and government forms for address autofill and validation.

What you get from the API:

- Forward lookup by 8-digit CEP: `GET /ws/{cep}/json/` returns the street (`logradouro`), complement, neighborhood (`bairro`), city (`localidade`), state (`uf`), region (`regiao`), and codes such as IBGE, GIA, DDD and SIAFI.
- Reverse lookup by address: `GET /ws/{uf}/{cidade}/{logradouro}/json/` returns up to 50 matching CEPs (UF, city, and street each need at least 3 characters).
- Alternate response formats: JSON, XML and JSONP (with a `callback` parameter).

Operational notes: the service responds over HTTPS with CORS enabled, so it can be called directly from browsers. Invalid or non-existent CEPs return `{"erro": "true"}` rather than an HTTP error; malformed requests return `400 Bad Request`. There is no published rate limit, but the operators warn that bulk validation of local databases can trigger an automatic block.

## Try it

**TypeScript**
```bash
npm install viacep-address-lookup
```

**Python**
```bash
pip install viacep-address-lookup-sdk
```

**PHP**
```bash
composer require voxgig/viacep-address-lookup-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/viacep-address-lookup-sdk/go
```

**Ruby**
```bash
gem install viacep-address-lookup-sdk
```

**Lua**
```bash
luarocks install viacep-address-lookup-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ViacepAddressLookupSDK } from 'viacep-address-lookup'

const client = new ViacepAddressLookupSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o viacep-address-lookup-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "viacep-address-lookup": {
      "command": "/abs/path/to/viacep-address-lookup-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **CepLookup** | A Brazilian postal code (CEP) and its resolved address; forward lookup at `/ws/{cep}/json/` and reverse lookup by state, city and street at `/ws/{uf}/{cidade}/{logradouro}/json/`. | `/{cep}/json` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from viacepaddresslookup_sdk import ViacepAddressLookupSDK

client = ViacepAddressLookupSDK({})


# Load a specific ceplookup
ceplookup, err = client.CepLookup(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'viacepaddresslookup_sdk.php';

$client = new ViacepAddressLookupSDK([]);


// Load a specific ceplookup
[$ceplookup, $err] = $client->CepLookup(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/viacep-address-lookup-sdk/go"

client := sdk.NewViacepAddressLookupSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "ViacepAddressLookup_sdk"

client = ViacepAddressLookupSDK.new({})


# Load a specific ceplookup
ceplookup, err = client.CepLookup(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("viacep-address-lookup_sdk")

local client = sdk.new({})


-- Load a specific ceplookup
local ceplookup, err = client:CepLookup(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ViacepAddressLookupSDK.test()
const result = await client.CepLookup().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ViacepAddressLookupSDK.test(None, None)
result, err = client.CepLookup(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ViacepAddressLookupSDK::test(null, null);
[$result, $err] = $client->CepLookup(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.CepLookup(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ViacepAddressLookupSDK.test(nil, nil)
result, err = client.CepLookup(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:CepLookup(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the ViaCEP Address Lookup

- Upstream: [https://viacep.com.br/](https://viacep.com.br/)

- Free to call from applications; no API key required.
- The underlying CEP database may not be redistributed or sold.
- Heavy bulk usage to validate local databases may result in automatic, indefinite blocking.
- No formal open-source licence is published; treat the service itself as the licensed artefact.

---

Generated from the ViaCEP Address Lookup OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
