### OSF API Documentation
The Open API specification for the Open Science Framework API lives here.
The developer documentation is generated from this specification by [ReDoc](https://github.com/Rebilly/ReDoc).

#### OpenAPI Specification
- The openapi specification for the OSF API lives in `swagger-spec/swagger.yaml` and contains references to many YAML files in the `swagger-spec` directory.

  ##### Editing the OpenAPI Specification
  - As a general rule, the `swagger.yaml` file should be kept **as minimal as possible**, meaning `$refs` to other YAML files should be utilized over inline endpoint and model definitions.
  - Each collection of related endpoints is contained in it's own folder in the `swagger-spec` directory (i.e. `swagger-spec/preprints/`), with each unique API endpoint having it's own YAML file (i.e. `detail.yaml` and `list.yaml` for `/preprints/` and `/preprints/{preprint_id}/`, respectively).
  - The specification should *always* conform to the official OpenAPI specification (v2.0), described in detail [here](http://swagger.io/specification/).

#### For development:
- `yarn install`
- `yarn run bundle` (spec validation)
- `yarn run serve` (serves at localhost:8080)
  - `yarn run watch` (serves at localhost:8080 with livereload)
  - *note*: to change the ports, update the `connect`/`livereload` gulp tasks in `gulpfile.js`

#### Spec Validation (i.e. `yarn run bundle`)
- `npm install -g swagger-cli`
- `swagger validate swagger-spec/swagger.yaml` (validates the multi-file YAML specification against the OpenAPI 2.0 schema and spec)
- `swagger bundle -o swagger.json swagger-spec/swagger.yaml` (bundles the multi-file YAML specification into a single JSON file)

#### Starting a local server (i.e. `yarn run serve`)
- `npm install -g http-server`
- `http-server -p 8080`
