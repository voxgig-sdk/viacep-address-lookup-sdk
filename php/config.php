<?php
declare(strict_types=1);

// ViacepAddressLookup SDK configuration

class ViacepAddressLookupConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ViacepAddressLookup",
                "slug" => "viacep-address-lookup",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://viacep.com.br/ws",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "cep_lookup" => [],
                ],
            ],
            "entity" => [
        'cep_lookup' => [
          'fields' => [
            [
              'name' => 'bairro',
              'short' => 'Neighborhood',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'cep',
              'short' => 'Postal code (CEP) in formatted style',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'complemento',
              'short' => 'Additional address information',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ddd',
              'short' => 'Area code (DDD)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'gia',
              'short' => 'GIA code (São Paulo state)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ibge',
              'short' => 'IBGE city code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'localidade',
              'short' => 'City name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'logradouro',
              'short' => 'Street name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'siafi',
              'short' => 'SIAFI code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'uf',
              'short' => 'State abbreviation',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'cep_lookup',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '01310100',
                        'kind' => 'param',
                        'name' => 'cep',
                        'orig' => 'cep',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{cep}/json',
                  'parts' => [
                    '{cep}',
                    'json',
                  ],
                  'select' => [
                    'exist' => [
                      'cep',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '01310100',
                        'kind' => 'param',
                        'name' => 'cep',
                        'orig' => 'cep',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{cep}/xml',
                  'parts' => [
                    '{cep}',
                    'xml',
                  ],
                  'select' => [
                    'exist' => [
                      'cep',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ViacepAddressLookupFeatures::make_feature($name);
    }
}
