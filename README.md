# OSF API Documentation
The Open API specification for the Open Science Framework API lives here.
The developer documentation is generated from this specification by [ReDoc](https://github.com/Rebilly/ReDoc).

## OpenAPI (OAI) Specification
- The openapi specification for the OSF API lives in `swagger-spec/swagger.yaml` and contains references to many YAML files in the `swagger-spec` directory.

### Editing the OAI Specification

- As a general rule, the `swagger.yaml` file should be kept **as minimal as possible**, meaning `$refs` to other YAML files should be utilized over inline endpoint and model definitions.
- Each collection of related endpoints is contained in it's own folder in the `swagger-spec` directory (i.e., `swagger-spec/preprints/`), with each unique API endpoint having it's own YAML file (i.e., `detail.yaml` and `list.yaml` for `/preprints/` and `/preprints/{preprint_id}/`, respectively).
- The specification should *always* conform to the official OpenAPI specification (v2.0), described in detail [here](http://swagger.io/specification/).

## Development

- `yarn install`
- `yarn run build` (spec validation)
- `yarn run serve` (serves at localhost:8080)
  - OR `yarn run watch` (serves at localhost:8080 with livereload)

## Spec validation

```
yarn run bundle
```

## Starting a local server

```
yarn run serve
```

