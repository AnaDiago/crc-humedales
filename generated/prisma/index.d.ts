
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Humedal
 * 
 */
export type Humedal = $Result.DefaultSelection<Prisma.$HumedalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Ubicacion: {
  Urbano: 'Urbano',
  Rural: 'Rural'
};

export type Ubicacion = (typeof Ubicacion)[keyof typeof Ubicacion]


export const Naturaleza: {
  Lentico: 'Lentico',
  Lotico: 'Lotico'
};

export type Naturaleza = (typeof Naturaleza)[keyof typeof Naturaleza]


export const Regimen: {
  Permanente: 'Permanente',
  Temporal: 'Temporal'
};

export type Regimen = (typeof Regimen)[keyof typeof Regimen]


export const Origen: {
  Natural: 'Natural',
  Artificial: 'Artificial',
  Indefinido: 'Indefinido'
};

export type Origen = (typeof Origen)[keyof typeof Origen]


export const Tipo: {
  Palustre: 'Palustre',
  Lacustre: 'Lacustre',
  Quebrada: 'Quebrada',
  Nacimiento: 'Nacimiento',
  Rio: 'Rio',
  Madrevieja: 'Madrevieja',
  ZanjonOAcequia: 'ZanjonOAcequia',
  Saladero: 'Saladero',
  GeotermicoOTermal: 'GeotermicoOTermal',
  Otro: 'Otro'
};

export type Tipo = (typeof Tipo)[keyof typeof Tipo]


export const Uso: {
  Reservorio: 'Reservorio',
  Conservacion: 'Conservacion',
  Recreacion: 'Recreacion',
  InteresAmbiental: 'InteresAmbiental',
  Paisajistico: 'Paisajistico',
  Piscicultura: 'Piscicultura',
  Industrial: 'Industrial',
  Desecacion: 'Desecacion',
  ReservorioRecreacion: 'ReservorioRecreacion',
  ConservacionReservorio: 'ConservacionReservorio',
  ConservacionRecreacion: 'ConservacionRecreacion',
  ProtecionConservacion: 'ProtecionConservacion',
  ProteccionReservorio: 'ProteccionReservorio',
  DesecacionReservorio: 'DesecacionReservorio',
  ZonaDeInundacion: 'ZonaDeInundacion',
  Urbanizacion: 'Urbanizacion',
  Ninguno: 'Ninguno',
  Otro: 'Otro'
};

export type Uso = (typeof Uso)[keyof typeof Uso]


export const Estado: {
  Alta: 'Alta',
  Media: 'Media',
  Baja: 'Baja',
  SinConservacion: 'SinConservacion'
};

export type Estado = (typeof Estado)[keyof typeof Estado]


export const Nivel: {
  Alta: 'Alta',
  Media: 'Media',
  Baja: 'Baja',
  SinIntervencion: 'SinIntervencion'
};

export type Nivel = (typeof Nivel)[keyof typeof Nivel]


export const Impacto: {
  ModificacionDeCursosDeAgua: 'ModificacionDeCursosDeAgua',
  ContaminacionDelAgua: 'ContaminacionDelAgua',
  Desecamiento: 'Desecamiento',
  AlteracionDelSuelo: 'AlteracionDelSuelo',
  AlteracionDeLaForma: 'AlteracionDeLaForma',
  RellenosEscombros: 'RellenosEscombros',
  ConstruccionesYObras: 'ConstruccionesYObras',
  UrbanismoParcelacion: 'UrbanismoParcelacion',
  CarreterasYCaminos: 'CarreterasYCaminos',
  Cultivos: 'Cultivos',
  PastoreoDeGanado: 'PastoreoDeGanado',
  TalaDeforestacion: 'TalaDeforestacion',
  Mineria: 'Mineria',
  VertimientoDeBasuras: 'VertimientoDeBasuras',
  CazaPescaIndiscriminada: 'CazaPescaIndiscriminada',
  ConflictosSociales: 'ConflictosSociales',
  FenomenosNaturales: 'FenomenosNaturales',
  Quemas: 'Quemas',
  Otros: 'Otros'
};

export type Impacto = (typeof Impacto)[keyof typeof Impacto]


export const Prioridad: {
  Alta: 'Alta',
  Media: 'Media',
  Baja: 'Baja'
};

export type Prioridad = (typeof Prioridad)[keyof typeof Prioridad]


export const Accion: {
  Conservacion: 'Conservacion',
  Aislamiento: 'Aislamiento',
  Reforestacion: 'Reforestacion',
  EducacionAmbiental: 'EducacionAmbiental',
  Otro: 'Otro'
};

export type Accion = (typeof Accion)[keyof typeof Accion]

}

export type Ubicacion = $Enums.Ubicacion

export const Ubicacion: typeof $Enums.Ubicacion

export type Naturaleza = $Enums.Naturaleza

export const Naturaleza: typeof $Enums.Naturaleza

export type Regimen = $Enums.Regimen

export const Regimen: typeof $Enums.Regimen

export type Origen = $Enums.Origen

export const Origen: typeof $Enums.Origen

export type Tipo = $Enums.Tipo

export const Tipo: typeof $Enums.Tipo

export type Uso = $Enums.Uso

export const Uso: typeof $Enums.Uso

export type Estado = $Enums.Estado

export const Estado: typeof $Enums.Estado

export type Nivel = $Enums.Nivel

export const Nivel: typeof $Enums.Nivel

export type Impacto = $Enums.Impacto

export const Impacto: typeof $Enums.Impacto

export type Prioridad = $Enums.Prioridad

export const Prioridad: typeof $Enums.Prioridad

export type Accion = $Enums.Accion

export const Accion: typeof $Enums.Accion

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Humedals
 * const humedals = await prisma.humedal.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Humedals
   * const humedals = await prisma.humedal.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.humedal`: Exposes CRUD operations for the **Humedal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Humedals
    * const humedals = await prisma.humedal.findMany()
    * ```
    */
  get humedal(): Prisma.HumedalDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Humedal: 'Humedal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "humedal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Humedal: {
        payload: Prisma.$HumedalPayload<ExtArgs>
        fields: Prisma.HumedalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HumedalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumedalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HumedalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumedalPayload>
          }
          findFirst: {
            args: Prisma.HumedalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumedalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HumedalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumedalPayload>
          }
          findMany: {
            args: Prisma.HumedalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumedalPayload>[]
          }
          create: {
            args: Prisma.HumedalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumedalPayload>
          }
          createMany: {
            args: Prisma.HumedalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HumedalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumedalPayload>[]
          }
          delete: {
            args: Prisma.HumedalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumedalPayload>
          }
          update: {
            args: Prisma.HumedalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumedalPayload>
          }
          deleteMany: {
            args: Prisma.HumedalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HumedalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HumedalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumedalPayload>[]
          }
          upsert: {
            args: Prisma.HumedalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumedalPayload>
          }
          aggregate: {
            args: Prisma.HumedalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHumedal>
          }
          groupBy: {
            args: Prisma.HumedalGroupByArgs<ExtArgs>
            result: $Utils.Optional<HumedalGroupByOutputType>[]
          }
          count: {
            args: Prisma.HumedalCountArgs<ExtArgs>
            result: $Utils.Optional<HumedalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    humedal?: HumedalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Humedal
   */

  export type AggregateHumedal = {
    _count: HumedalCountAggregateOutputType | null
    _avg: HumedalAvgAggregateOutputType | null
    _sum: HumedalSumAggregateOutputType | null
    _min: HumedalMinAggregateOutputType | null
    _max: HumedalMaxAggregateOutputType | null
  }

  export type HumedalAvgAggregateOutputType = {
    objectid: number | null
    area_ha: number | null
    perimetro: number | null
    altitud: number | null
    este: number | null
    norte: number | null
    longitud: number | null
    latitud: number | null
    cod_dane: number | null
  }

  export type HumedalSumAggregateOutputType = {
    objectid: number | null
    area_ha: number | null
    perimetro: number | null
    altitud: number | null
    este: number | null
    norte: number | null
    longitud: number | null
    latitud: number | null
    cod_dane: number | null
  }

  export type HumedalMinAggregateOutputType = {
    objectid: number | null
    num_hum: string | null
    nombre_hum: string | null
    area_ha: number | null
    perimetro: number | null
    altitud: number | null
    este: number | null
    norte: number | null
    longitud: number | null
    latitud: number | null
    fecha_act: Date | null
    cod_dane: number | null
    municipio: string | null
    departamen: string | null
    vereda: string | null
    ubicacion: $Enums.Ubicacion | null
    jurisdicci: string | null
    naturaleza: $Enums.Naturaleza | null
    regimen_h: $Enums.Regimen | null
    origen: $Enums.Origen | null
    tipo: $Enums.Tipo | null
    clase: string | null
    instru_ges: string | null
    estado: $Enums.Estado | null
    nivel_inte: $Enums.Nivel | null
    prioridad: $Enums.Prioridad | null
    accion: $Enums.Accion | null
    complejo: string | null
    cuenca: string | null
    subcuenca: string | null
    microcuenc: string | null
    area_h: string | null
    zona_h: string | null
    subzona_h: string | null
    foto: string | null
    descri_gen: string | null
    descri_bio: string | null
    descri_tec: string | null
  }

  export type HumedalMaxAggregateOutputType = {
    objectid: number | null
    num_hum: string | null
    nombre_hum: string | null
    area_ha: number | null
    perimetro: number | null
    altitud: number | null
    este: number | null
    norte: number | null
    longitud: number | null
    latitud: number | null
    fecha_act: Date | null
    cod_dane: number | null
    municipio: string | null
    departamen: string | null
    vereda: string | null
    ubicacion: $Enums.Ubicacion | null
    jurisdicci: string | null
    naturaleza: $Enums.Naturaleza | null
    regimen_h: $Enums.Regimen | null
    origen: $Enums.Origen | null
    tipo: $Enums.Tipo | null
    clase: string | null
    instru_ges: string | null
    estado: $Enums.Estado | null
    nivel_inte: $Enums.Nivel | null
    prioridad: $Enums.Prioridad | null
    accion: $Enums.Accion | null
    complejo: string | null
    cuenca: string | null
    subcuenca: string | null
    microcuenc: string | null
    area_h: string | null
    zona_h: string | null
    subzona_h: string | null
    foto: string | null
    descri_gen: string | null
    descri_bio: string | null
    descri_tec: string | null
  }

  export type HumedalCountAggregateOutputType = {
    objectid: number
    num_hum: number
    nombre_hum: number
    area_ha: number
    perimetro: number
    altitud: number
    este: number
    norte: number
    longitud: number
    latitud: number
    fecha_act: number
    cod_dane: number
    municipio: number
    departamen: number
    vereda: number
    ubicacion: number
    jurisdicci: number
    naturaleza: number
    regimen_h: number
    origen: number
    tipo: number
    clase: number
    instru_ges: number
    uso: number
    estado: number
    nivel_inte: number
    impactos: number
    prioridad: number
    accion: number
    complejo: number
    cuenca: number
    subcuenca: number
    microcuenc: number
    area_h: number
    zona_h: number
    subzona_h: number
    foto: number
    descri_gen: number
    descri_bio: number
    descri_tec: number
    _all: number
  }


  export type HumedalAvgAggregateInputType = {
    objectid?: true
    area_ha?: true
    perimetro?: true
    altitud?: true
    este?: true
    norte?: true
    longitud?: true
    latitud?: true
    cod_dane?: true
  }

  export type HumedalSumAggregateInputType = {
    objectid?: true
    area_ha?: true
    perimetro?: true
    altitud?: true
    este?: true
    norte?: true
    longitud?: true
    latitud?: true
    cod_dane?: true
  }

  export type HumedalMinAggregateInputType = {
    objectid?: true
    num_hum?: true
    nombre_hum?: true
    area_ha?: true
    perimetro?: true
    altitud?: true
    este?: true
    norte?: true
    longitud?: true
    latitud?: true
    fecha_act?: true
    cod_dane?: true
    municipio?: true
    departamen?: true
    vereda?: true
    ubicacion?: true
    jurisdicci?: true
    naturaleza?: true
    regimen_h?: true
    origen?: true
    tipo?: true
    clase?: true
    instru_ges?: true
    estado?: true
    nivel_inte?: true
    prioridad?: true
    accion?: true
    complejo?: true
    cuenca?: true
    subcuenca?: true
    microcuenc?: true
    area_h?: true
    zona_h?: true
    subzona_h?: true
    foto?: true
    descri_gen?: true
    descri_bio?: true
    descri_tec?: true
  }

  export type HumedalMaxAggregateInputType = {
    objectid?: true
    num_hum?: true
    nombre_hum?: true
    area_ha?: true
    perimetro?: true
    altitud?: true
    este?: true
    norte?: true
    longitud?: true
    latitud?: true
    fecha_act?: true
    cod_dane?: true
    municipio?: true
    departamen?: true
    vereda?: true
    ubicacion?: true
    jurisdicci?: true
    naturaleza?: true
    regimen_h?: true
    origen?: true
    tipo?: true
    clase?: true
    instru_ges?: true
    estado?: true
    nivel_inte?: true
    prioridad?: true
    accion?: true
    complejo?: true
    cuenca?: true
    subcuenca?: true
    microcuenc?: true
    area_h?: true
    zona_h?: true
    subzona_h?: true
    foto?: true
    descri_gen?: true
    descri_bio?: true
    descri_tec?: true
  }

  export type HumedalCountAggregateInputType = {
    objectid?: true
    num_hum?: true
    nombre_hum?: true
    area_ha?: true
    perimetro?: true
    altitud?: true
    este?: true
    norte?: true
    longitud?: true
    latitud?: true
    fecha_act?: true
    cod_dane?: true
    municipio?: true
    departamen?: true
    vereda?: true
    ubicacion?: true
    jurisdicci?: true
    naturaleza?: true
    regimen_h?: true
    origen?: true
    tipo?: true
    clase?: true
    instru_ges?: true
    uso?: true
    estado?: true
    nivel_inte?: true
    impactos?: true
    prioridad?: true
    accion?: true
    complejo?: true
    cuenca?: true
    subcuenca?: true
    microcuenc?: true
    area_h?: true
    zona_h?: true
    subzona_h?: true
    foto?: true
    descri_gen?: true
    descri_bio?: true
    descri_tec?: true
    _all?: true
  }

  export type HumedalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Humedal to aggregate.
     */
    where?: HumedalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Humedals to fetch.
     */
    orderBy?: HumedalOrderByWithRelationInput | HumedalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HumedalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Humedals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Humedals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Humedals
    **/
    _count?: true | HumedalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HumedalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HumedalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HumedalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HumedalMaxAggregateInputType
  }

  export type GetHumedalAggregateType<T extends HumedalAggregateArgs> = {
        [P in keyof T & keyof AggregateHumedal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHumedal[P]>
      : GetScalarType<T[P], AggregateHumedal[P]>
  }




  export type HumedalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HumedalWhereInput
    orderBy?: HumedalOrderByWithAggregationInput | HumedalOrderByWithAggregationInput[]
    by: HumedalScalarFieldEnum[] | HumedalScalarFieldEnum
    having?: HumedalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HumedalCountAggregateInputType | true
    _avg?: HumedalAvgAggregateInputType
    _sum?: HumedalSumAggregateInputType
    _min?: HumedalMinAggregateInputType
    _max?: HumedalMaxAggregateInputType
  }

  export type HumedalGroupByOutputType = {
    objectid: number
    num_hum: string
    nombre_hum: string | null
    area_ha: number | null
    perimetro: number | null
    altitud: number | null
    este: number | null
    norte: number | null
    longitud: number | null
    latitud: number | null
    fecha_act: Date | null
    cod_dane: number | null
    municipio: string | null
    departamen: string | null
    vereda: string | null
    ubicacion: $Enums.Ubicacion | null
    jurisdicci: string | null
    naturaleza: $Enums.Naturaleza | null
    regimen_h: $Enums.Regimen | null
    origen: $Enums.Origen | null
    tipo: $Enums.Tipo | null
    clase: string | null
    instru_ges: string | null
    uso: $Enums.Uso[]
    estado: $Enums.Estado | null
    nivel_inte: $Enums.Nivel | null
    impactos: $Enums.Impacto[]
    prioridad: $Enums.Prioridad | null
    accion: $Enums.Accion | null
    complejo: string | null
    cuenca: string | null
    subcuenca: string | null
    microcuenc: string | null
    area_h: string | null
    zona_h: string | null
    subzona_h: string | null
    foto: string | null
    descri_gen: string | null
    descri_bio: string | null
    descri_tec: string | null
    _count: HumedalCountAggregateOutputType | null
    _avg: HumedalAvgAggregateOutputType | null
    _sum: HumedalSumAggregateOutputType | null
    _min: HumedalMinAggregateOutputType | null
    _max: HumedalMaxAggregateOutputType | null
  }

  type GetHumedalGroupByPayload<T extends HumedalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HumedalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HumedalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HumedalGroupByOutputType[P]>
            : GetScalarType<T[P], HumedalGroupByOutputType[P]>
        }
      >
    >


  export type HumedalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    objectid?: boolean
    num_hum?: boolean
    nombre_hum?: boolean
    area_ha?: boolean
    perimetro?: boolean
    altitud?: boolean
    este?: boolean
    norte?: boolean
    longitud?: boolean
    latitud?: boolean
    fecha_act?: boolean
    cod_dane?: boolean
    municipio?: boolean
    departamen?: boolean
    vereda?: boolean
    ubicacion?: boolean
    jurisdicci?: boolean
    naturaleza?: boolean
    regimen_h?: boolean
    origen?: boolean
    tipo?: boolean
    clase?: boolean
    instru_ges?: boolean
    uso?: boolean
    estado?: boolean
    nivel_inte?: boolean
    impactos?: boolean
    prioridad?: boolean
    accion?: boolean
    complejo?: boolean
    cuenca?: boolean
    subcuenca?: boolean
    microcuenc?: boolean
    area_h?: boolean
    zona_h?: boolean
    subzona_h?: boolean
    foto?: boolean
    descri_gen?: boolean
    descri_bio?: boolean
    descri_tec?: boolean
  }, ExtArgs["result"]["humedal"]>

  export type HumedalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    objectid?: boolean
    num_hum?: boolean
    nombre_hum?: boolean
    area_ha?: boolean
    perimetro?: boolean
    altitud?: boolean
    este?: boolean
    norte?: boolean
    longitud?: boolean
    latitud?: boolean
    fecha_act?: boolean
    cod_dane?: boolean
    municipio?: boolean
    departamen?: boolean
    vereda?: boolean
    ubicacion?: boolean
    jurisdicci?: boolean
    naturaleza?: boolean
    regimen_h?: boolean
    origen?: boolean
    tipo?: boolean
    clase?: boolean
    instru_ges?: boolean
    uso?: boolean
    estado?: boolean
    nivel_inte?: boolean
    impactos?: boolean
    prioridad?: boolean
    accion?: boolean
    complejo?: boolean
    cuenca?: boolean
    subcuenca?: boolean
    microcuenc?: boolean
    area_h?: boolean
    zona_h?: boolean
    subzona_h?: boolean
    foto?: boolean
    descri_gen?: boolean
    descri_bio?: boolean
    descri_tec?: boolean
  }, ExtArgs["result"]["humedal"]>

  export type HumedalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    objectid?: boolean
    num_hum?: boolean
    nombre_hum?: boolean
    area_ha?: boolean
    perimetro?: boolean
    altitud?: boolean
    este?: boolean
    norte?: boolean
    longitud?: boolean
    latitud?: boolean
    fecha_act?: boolean
    cod_dane?: boolean
    municipio?: boolean
    departamen?: boolean
    vereda?: boolean
    ubicacion?: boolean
    jurisdicci?: boolean
    naturaleza?: boolean
    regimen_h?: boolean
    origen?: boolean
    tipo?: boolean
    clase?: boolean
    instru_ges?: boolean
    uso?: boolean
    estado?: boolean
    nivel_inte?: boolean
    impactos?: boolean
    prioridad?: boolean
    accion?: boolean
    complejo?: boolean
    cuenca?: boolean
    subcuenca?: boolean
    microcuenc?: boolean
    area_h?: boolean
    zona_h?: boolean
    subzona_h?: boolean
    foto?: boolean
    descri_gen?: boolean
    descri_bio?: boolean
    descri_tec?: boolean
  }, ExtArgs["result"]["humedal"]>

  export type HumedalSelectScalar = {
    objectid?: boolean
    num_hum?: boolean
    nombre_hum?: boolean
    area_ha?: boolean
    perimetro?: boolean
    altitud?: boolean
    este?: boolean
    norte?: boolean
    longitud?: boolean
    latitud?: boolean
    fecha_act?: boolean
    cod_dane?: boolean
    municipio?: boolean
    departamen?: boolean
    vereda?: boolean
    ubicacion?: boolean
    jurisdicci?: boolean
    naturaleza?: boolean
    regimen_h?: boolean
    origen?: boolean
    tipo?: boolean
    clase?: boolean
    instru_ges?: boolean
    uso?: boolean
    estado?: boolean
    nivel_inte?: boolean
    impactos?: boolean
    prioridad?: boolean
    accion?: boolean
    complejo?: boolean
    cuenca?: boolean
    subcuenca?: boolean
    microcuenc?: boolean
    area_h?: boolean
    zona_h?: boolean
    subzona_h?: boolean
    foto?: boolean
    descri_gen?: boolean
    descri_bio?: boolean
    descri_tec?: boolean
  }

  export type HumedalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"objectid" | "num_hum" | "nombre_hum" | "area_ha" | "perimetro" | "altitud" | "este" | "norte" | "longitud" | "latitud" | "fecha_act" | "cod_dane" | "municipio" | "departamen" | "vereda" | "ubicacion" | "jurisdicci" | "naturaleza" | "regimen_h" | "origen" | "tipo" | "clase" | "instru_ges" | "uso" | "estado" | "nivel_inte" | "impactos" | "prioridad" | "accion" | "complejo" | "cuenca" | "subcuenca" | "microcuenc" | "area_h" | "zona_h" | "subzona_h" | "foto" | "descri_gen" | "descri_bio" | "descri_tec", ExtArgs["result"]["humedal"]>

  export type $HumedalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Humedal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      objectid: number
      num_hum: string
      nombre_hum: string | null
      area_ha: number | null
      perimetro: number | null
      altitud: number | null
      este: number | null
      norte: number | null
      longitud: number | null
      latitud: number | null
      fecha_act: Date | null
      cod_dane: number | null
      municipio: string | null
      departamen: string | null
      vereda: string | null
      ubicacion: $Enums.Ubicacion | null
      jurisdicci: string | null
      naturaleza: $Enums.Naturaleza | null
      regimen_h: $Enums.Regimen | null
      origen: $Enums.Origen | null
      tipo: $Enums.Tipo | null
      clase: string | null
      instru_ges: string | null
      uso: $Enums.Uso[]
      estado: $Enums.Estado | null
      nivel_inte: $Enums.Nivel | null
      impactos: $Enums.Impacto[]
      prioridad: $Enums.Prioridad | null
      accion: $Enums.Accion | null
      complejo: string | null
      cuenca: string | null
      subcuenca: string | null
      microcuenc: string | null
      area_h: string | null
      zona_h: string | null
      subzona_h: string | null
      foto: string | null
      descri_gen: string | null
      descri_bio: string | null
      descri_tec: string | null
    }, ExtArgs["result"]["humedal"]>
    composites: {}
  }

  type HumedalGetPayload<S extends boolean | null | undefined | HumedalDefaultArgs> = $Result.GetResult<Prisma.$HumedalPayload, S>

  type HumedalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HumedalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HumedalCountAggregateInputType | true
    }

  export interface HumedalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Humedal'], meta: { name: 'Humedal' } }
    /**
     * Find zero or one Humedal that matches the filter.
     * @param {HumedalFindUniqueArgs} args - Arguments to find a Humedal
     * @example
     * // Get one Humedal
     * const humedal = await prisma.humedal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HumedalFindUniqueArgs>(args: SelectSubset<T, HumedalFindUniqueArgs<ExtArgs>>): Prisma__HumedalClient<$Result.GetResult<Prisma.$HumedalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Humedal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HumedalFindUniqueOrThrowArgs} args - Arguments to find a Humedal
     * @example
     * // Get one Humedal
     * const humedal = await prisma.humedal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HumedalFindUniqueOrThrowArgs>(args: SelectSubset<T, HumedalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HumedalClient<$Result.GetResult<Prisma.$HumedalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Humedal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumedalFindFirstArgs} args - Arguments to find a Humedal
     * @example
     * // Get one Humedal
     * const humedal = await prisma.humedal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HumedalFindFirstArgs>(args?: SelectSubset<T, HumedalFindFirstArgs<ExtArgs>>): Prisma__HumedalClient<$Result.GetResult<Prisma.$HumedalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Humedal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumedalFindFirstOrThrowArgs} args - Arguments to find a Humedal
     * @example
     * // Get one Humedal
     * const humedal = await prisma.humedal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HumedalFindFirstOrThrowArgs>(args?: SelectSubset<T, HumedalFindFirstOrThrowArgs<ExtArgs>>): Prisma__HumedalClient<$Result.GetResult<Prisma.$HumedalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Humedals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumedalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Humedals
     * const humedals = await prisma.humedal.findMany()
     * 
     * // Get first 10 Humedals
     * const humedals = await prisma.humedal.findMany({ take: 10 })
     * 
     * // Only select the `objectid`
     * const humedalWithObjectidOnly = await prisma.humedal.findMany({ select: { objectid: true } })
     * 
     */
    findMany<T extends HumedalFindManyArgs>(args?: SelectSubset<T, HumedalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HumedalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Humedal.
     * @param {HumedalCreateArgs} args - Arguments to create a Humedal.
     * @example
     * // Create one Humedal
     * const Humedal = await prisma.humedal.create({
     *   data: {
     *     // ... data to create a Humedal
     *   }
     * })
     * 
     */
    create<T extends HumedalCreateArgs>(args: SelectSubset<T, HumedalCreateArgs<ExtArgs>>): Prisma__HumedalClient<$Result.GetResult<Prisma.$HumedalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Humedals.
     * @param {HumedalCreateManyArgs} args - Arguments to create many Humedals.
     * @example
     * // Create many Humedals
     * const humedal = await prisma.humedal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HumedalCreateManyArgs>(args?: SelectSubset<T, HumedalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Humedals and returns the data saved in the database.
     * @param {HumedalCreateManyAndReturnArgs} args - Arguments to create many Humedals.
     * @example
     * // Create many Humedals
     * const humedal = await prisma.humedal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Humedals and only return the `objectid`
     * const humedalWithObjectidOnly = await prisma.humedal.createManyAndReturn({
     *   select: { objectid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HumedalCreateManyAndReturnArgs>(args?: SelectSubset<T, HumedalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HumedalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Humedal.
     * @param {HumedalDeleteArgs} args - Arguments to delete one Humedal.
     * @example
     * // Delete one Humedal
     * const Humedal = await prisma.humedal.delete({
     *   where: {
     *     // ... filter to delete one Humedal
     *   }
     * })
     * 
     */
    delete<T extends HumedalDeleteArgs>(args: SelectSubset<T, HumedalDeleteArgs<ExtArgs>>): Prisma__HumedalClient<$Result.GetResult<Prisma.$HumedalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Humedal.
     * @param {HumedalUpdateArgs} args - Arguments to update one Humedal.
     * @example
     * // Update one Humedal
     * const humedal = await prisma.humedal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HumedalUpdateArgs>(args: SelectSubset<T, HumedalUpdateArgs<ExtArgs>>): Prisma__HumedalClient<$Result.GetResult<Prisma.$HumedalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Humedals.
     * @param {HumedalDeleteManyArgs} args - Arguments to filter Humedals to delete.
     * @example
     * // Delete a few Humedals
     * const { count } = await prisma.humedal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HumedalDeleteManyArgs>(args?: SelectSubset<T, HumedalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Humedals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumedalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Humedals
     * const humedal = await prisma.humedal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HumedalUpdateManyArgs>(args: SelectSubset<T, HumedalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Humedals and returns the data updated in the database.
     * @param {HumedalUpdateManyAndReturnArgs} args - Arguments to update many Humedals.
     * @example
     * // Update many Humedals
     * const humedal = await prisma.humedal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Humedals and only return the `objectid`
     * const humedalWithObjectidOnly = await prisma.humedal.updateManyAndReturn({
     *   select: { objectid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HumedalUpdateManyAndReturnArgs>(args: SelectSubset<T, HumedalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HumedalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Humedal.
     * @param {HumedalUpsertArgs} args - Arguments to update or create a Humedal.
     * @example
     * // Update or create a Humedal
     * const humedal = await prisma.humedal.upsert({
     *   create: {
     *     // ... data to create a Humedal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Humedal we want to update
     *   }
     * })
     */
    upsert<T extends HumedalUpsertArgs>(args: SelectSubset<T, HumedalUpsertArgs<ExtArgs>>): Prisma__HumedalClient<$Result.GetResult<Prisma.$HumedalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Humedals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumedalCountArgs} args - Arguments to filter Humedals to count.
     * @example
     * // Count the number of Humedals
     * const count = await prisma.humedal.count({
     *   where: {
     *     // ... the filter for the Humedals we want to count
     *   }
     * })
    **/
    count<T extends HumedalCountArgs>(
      args?: Subset<T, HumedalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HumedalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Humedal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumedalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HumedalAggregateArgs>(args: Subset<T, HumedalAggregateArgs>): Prisma.PrismaPromise<GetHumedalAggregateType<T>>

    /**
     * Group by Humedal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumedalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HumedalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HumedalGroupByArgs['orderBy'] }
        : { orderBy?: HumedalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HumedalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHumedalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Humedal model
   */
  readonly fields: HumedalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Humedal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HumedalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Humedal model
   */
  interface HumedalFieldRefs {
    readonly objectid: FieldRef<"Humedal", 'Int'>
    readonly num_hum: FieldRef<"Humedal", 'String'>
    readonly nombre_hum: FieldRef<"Humedal", 'String'>
    readonly area_ha: FieldRef<"Humedal", 'Float'>
    readonly perimetro: FieldRef<"Humedal", 'Float'>
    readonly altitud: FieldRef<"Humedal", 'Float'>
    readonly este: FieldRef<"Humedal", 'Float'>
    readonly norte: FieldRef<"Humedal", 'Float'>
    readonly longitud: FieldRef<"Humedal", 'Float'>
    readonly latitud: FieldRef<"Humedal", 'Float'>
    readonly fecha_act: FieldRef<"Humedal", 'DateTime'>
    readonly cod_dane: FieldRef<"Humedal", 'Float'>
    readonly municipio: FieldRef<"Humedal", 'String'>
    readonly departamen: FieldRef<"Humedal", 'String'>
    readonly vereda: FieldRef<"Humedal", 'String'>
    readonly ubicacion: FieldRef<"Humedal", 'Ubicacion'>
    readonly jurisdicci: FieldRef<"Humedal", 'String'>
    readonly naturaleza: FieldRef<"Humedal", 'Naturaleza'>
    readonly regimen_h: FieldRef<"Humedal", 'Regimen'>
    readonly origen: FieldRef<"Humedal", 'Origen'>
    readonly tipo: FieldRef<"Humedal", 'Tipo'>
    readonly clase: FieldRef<"Humedal", 'String'>
    readonly instru_ges: FieldRef<"Humedal", 'String'>
    readonly uso: FieldRef<"Humedal", 'Uso[]'>
    readonly estado: FieldRef<"Humedal", 'Estado'>
    readonly nivel_inte: FieldRef<"Humedal", 'Nivel'>
    readonly impactos: FieldRef<"Humedal", 'Impacto[]'>
    readonly prioridad: FieldRef<"Humedal", 'Prioridad'>
    readonly accion: FieldRef<"Humedal", 'Accion'>
    readonly complejo: FieldRef<"Humedal", 'String'>
    readonly cuenca: FieldRef<"Humedal", 'String'>
    readonly subcuenca: FieldRef<"Humedal", 'String'>
    readonly microcuenc: FieldRef<"Humedal", 'String'>
    readonly area_h: FieldRef<"Humedal", 'String'>
    readonly zona_h: FieldRef<"Humedal", 'String'>
    readonly subzona_h: FieldRef<"Humedal", 'String'>
    readonly foto: FieldRef<"Humedal", 'String'>
    readonly descri_gen: FieldRef<"Humedal", 'String'>
    readonly descri_bio: FieldRef<"Humedal", 'String'>
    readonly descri_tec: FieldRef<"Humedal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Humedal findUnique
   */
  export type HumedalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Humedal
     */
    select?: HumedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Humedal
     */
    omit?: HumedalOmit<ExtArgs> | null
    /**
     * Filter, which Humedal to fetch.
     */
    where: HumedalWhereUniqueInput
  }

  /**
   * Humedal findUniqueOrThrow
   */
  export type HumedalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Humedal
     */
    select?: HumedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Humedal
     */
    omit?: HumedalOmit<ExtArgs> | null
    /**
     * Filter, which Humedal to fetch.
     */
    where: HumedalWhereUniqueInput
  }

  /**
   * Humedal findFirst
   */
  export type HumedalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Humedal
     */
    select?: HumedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Humedal
     */
    omit?: HumedalOmit<ExtArgs> | null
    /**
     * Filter, which Humedal to fetch.
     */
    where?: HumedalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Humedals to fetch.
     */
    orderBy?: HumedalOrderByWithRelationInput | HumedalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Humedals.
     */
    cursor?: HumedalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Humedals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Humedals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Humedals.
     */
    distinct?: HumedalScalarFieldEnum | HumedalScalarFieldEnum[]
  }

  /**
   * Humedal findFirstOrThrow
   */
  export type HumedalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Humedal
     */
    select?: HumedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Humedal
     */
    omit?: HumedalOmit<ExtArgs> | null
    /**
     * Filter, which Humedal to fetch.
     */
    where?: HumedalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Humedals to fetch.
     */
    orderBy?: HumedalOrderByWithRelationInput | HumedalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Humedals.
     */
    cursor?: HumedalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Humedals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Humedals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Humedals.
     */
    distinct?: HumedalScalarFieldEnum | HumedalScalarFieldEnum[]
  }

  /**
   * Humedal findMany
   */
  export type HumedalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Humedal
     */
    select?: HumedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Humedal
     */
    omit?: HumedalOmit<ExtArgs> | null
    /**
     * Filter, which Humedals to fetch.
     */
    where?: HumedalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Humedals to fetch.
     */
    orderBy?: HumedalOrderByWithRelationInput | HumedalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Humedals.
     */
    cursor?: HumedalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Humedals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Humedals.
     */
    skip?: number
    distinct?: HumedalScalarFieldEnum | HumedalScalarFieldEnum[]
  }

  /**
   * Humedal create
   */
  export type HumedalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Humedal
     */
    select?: HumedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Humedal
     */
    omit?: HumedalOmit<ExtArgs> | null
    /**
     * The data needed to create a Humedal.
     */
    data: XOR<HumedalCreateInput, HumedalUncheckedCreateInput>
  }

  /**
   * Humedal createMany
   */
  export type HumedalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Humedals.
     */
    data: HumedalCreateManyInput | HumedalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Humedal createManyAndReturn
   */
  export type HumedalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Humedal
     */
    select?: HumedalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Humedal
     */
    omit?: HumedalOmit<ExtArgs> | null
    /**
     * The data used to create many Humedals.
     */
    data: HumedalCreateManyInput | HumedalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Humedal update
   */
  export type HumedalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Humedal
     */
    select?: HumedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Humedal
     */
    omit?: HumedalOmit<ExtArgs> | null
    /**
     * The data needed to update a Humedal.
     */
    data: XOR<HumedalUpdateInput, HumedalUncheckedUpdateInput>
    /**
     * Choose, which Humedal to update.
     */
    where: HumedalWhereUniqueInput
  }

  /**
   * Humedal updateMany
   */
  export type HumedalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Humedals.
     */
    data: XOR<HumedalUpdateManyMutationInput, HumedalUncheckedUpdateManyInput>
    /**
     * Filter which Humedals to update
     */
    where?: HumedalWhereInput
    /**
     * Limit how many Humedals to update.
     */
    limit?: number
  }

  /**
   * Humedal updateManyAndReturn
   */
  export type HumedalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Humedal
     */
    select?: HumedalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Humedal
     */
    omit?: HumedalOmit<ExtArgs> | null
    /**
     * The data used to update Humedals.
     */
    data: XOR<HumedalUpdateManyMutationInput, HumedalUncheckedUpdateManyInput>
    /**
     * Filter which Humedals to update
     */
    where?: HumedalWhereInput
    /**
     * Limit how many Humedals to update.
     */
    limit?: number
  }

  /**
   * Humedal upsert
   */
  export type HumedalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Humedal
     */
    select?: HumedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Humedal
     */
    omit?: HumedalOmit<ExtArgs> | null
    /**
     * The filter to search for the Humedal to update in case it exists.
     */
    where: HumedalWhereUniqueInput
    /**
     * In case the Humedal found by the `where` argument doesn't exist, create a new Humedal with this data.
     */
    create: XOR<HumedalCreateInput, HumedalUncheckedCreateInput>
    /**
     * In case the Humedal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HumedalUpdateInput, HumedalUncheckedUpdateInput>
  }

  /**
   * Humedal delete
   */
  export type HumedalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Humedal
     */
    select?: HumedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Humedal
     */
    omit?: HumedalOmit<ExtArgs> | null
    /**
     * Filter which Humedal to delete.
     */
    where: HumedalWhereUniqueInput
  }

  /**
   * Humedal deleteMany
   */
  export type HumedalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Humedals to delete
     */
    where?: HumedalWhereInput
    /**
     * Limit how many Humedals to delete.
     */
    limit?: number
  }

  /**
   * Humedal without action
   */
  export type HumedalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Humedal
     */
    select?: HumedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Humedal
     */
    omit?: HumedalOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HumedalScalarFieldEnum: {
    objectid: 'objectid',
    num_hum: 'num_hum',
    nombre_hum: 'nombre_hum',
    area_ha: 'area_ha',
    perimetro: 'perimetro',
    altitud: 'altitud',
    este: 'este',
    norte: 'norte',
    longitud: 'longitud',
    latitud: 'latitud',
    fecha_act: 'fecha_act',
    cod_dane: 'cod_dane',
    municipio: 'municipio',
    departamen: 'departamen',
    vereda: 'vereda',
    ubicacion: 'ubicacion',
    jurisdicci: 'jurisdicci',
    naturaleza: 'naturaleza',
    regimen_h: 'regimen_h',
    origen: 'origen',
    tipo: 'tipo',
    clase: 'clase',
    instru_ges: 'instru_ges',
    uso: 'uso',
    estado: 'estado',
    nivel_inte: 'nivel_inte',
    impactos: 'impactos',
    prioridad: 'prioridad',
    accion: 'accion',
    complejo: 'complejo',
    cuenca: 'cuenca',
    subcuenca: 'subcuenca',
    microcuenc: 'microcuenc',
    area_h: 'area_h',
    zona_h: 'zona_h',
    subzona_h: 'subzona_h',
    foto: 'foto',
    descri_gen: 'descri_gen',
    descri_bio: 'descri_bio',
    descri_tec: 'descri_tec'
  };

  export type HumedalScalarFieldEnum = (typeof HumedalScalarFieldEnum)[keyof typeof HumedalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Ubicacion'
   */
  export type EnumUbicacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Ubicacion'>
    


  /**
   * Reference to a field of type 'Ubicacion[]'
   */
  export type ListEnumUbicacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Ubicacion[]'>
    


  /**
   * Reference to a field of type 'Naturaleza'
   */
  export type EnumNaturalezaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Naturaleza'>
    


  /**
   * Reference to a field of type 'Naturaleza[]'
   */
  export type ListEnumNaturalezaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Naturaleza[]'>
    


  /**
   * Reference to a field of type 'Regimen'
   */
  export type EnumRegimenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Regimen'>
    


  /**
   * Reference to a field of type 'Regimen[]'
   */
  export type ListEnumRegimenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Regimen[]'>
    


  /**
   * Reference to a field of type 'Origen'
   */
  export type EnumOrigenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Origen'>
    


  /**
   * Reference to a field of type 'Origen[]'
   */
  export type ListEnumOrigenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Origen[]'>
    


  /**
   * Reference to a field of type 'Tipo'
   */
  export type EnumTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipo'>
    


  /**
   * Reference to a field of type 'Tipo[]'
   */
  export type ListEnumTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipo[]'>
    


  /**
   * Reference to a field of type 'Uso[]'
   */
  export type ListEnumUsoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Uso[]'>
    


  /**
   * Reference to a field of type 'Uso'
   */
  export type EnumUsoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Uso'>
    


  /**
   * Reference to a field of type 'Estado'
   */
  export type EnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado'>
    


  /**
   * Reference to a field of type 'Estado[]'
   */
  export type ListEnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado[]'>
    


  /**
   * Reference to a field of type 'Nivel'
   */
  export type EnumNivelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Nivel'>
    


  /**
   * Reference to a field of type 'Nivel[]'
   */
  export type ListEnumNivelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Nivel[]'>
    


  /**
   * Reference to a field of type 'Impacto[]'
   */
  export type ListEnumImpactoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Impacto[]'>
    


  /**
   * Reference to a field of type 'Impacto'
   */
  export type EnumImpactoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Impacto'>
    


  /**
   * Reference to a field of type 'Prioridad'
   */
  export type EnumPrioridadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridad'>
    


  /**
   * Reference to a field of type 'Prioridad[]'
   */
  export type ListEnumPrioridadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridad[]'>
    


  /**
   * Reference to a field of type 'Accion'
   */
  export type EnumAccionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Accion'>
    


  /**
   * Reference to a field of type 'Accion[]'
   */
  export type ListEnumAccionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Accion[]'>
    
  /**
   * Deep Input Types
   */


  export type HumedalWhereInput = {
    AND?: HumedalWhereInput | HumedalWhereInput[]
    OR?: HumedalWhereInput[]
    NOT?: HumedalWhereInput | HumedalWhereInput[]
    objectid?: IntFilter<"Humedal"> | number
    num_hum?: StringFilter<"Humedal"> | string
    nombre_hum?: StringNullableFilter<"Humedal"> | string | null
    area_ha?: FloatNullableFilter<"Humedal"> | number | null
    perimetro?: FloatNullableFilter<"Humedal"> | number | null
    altitud?: FloatNullableFilter<"Humedal"> | number | null
    este?: FloatNullableFilter<"Humedal"> | number | null
    norte?: FloatNullableFilter<"Humedal"> | number | null
    longitud?: FloatNullableFilter<"Humedal"> | number | null
    latitud?: FloatNullableFilter<"Humedal"> | number | null
    fecha_act?: DateTimeNullableFilter<"Humedal"> | Date | string | null
    cod_dane?: FloatNullableFilter<"Humedal"> | number | null
    municipio?: StringNullableFilter<"Humedal"> | string | null
    departamen?: StringNullableFilter<"Humedal"> | string | null
    vereda?: StringNullableFilter<"Humedal"> | string | null
    ubicacion?: EnumUbicacionNullableFilter<"Humedal"> | $Enums.Ubicacion | null
    jurisdicci?: StringNullableFilter<"Humedal"> | string | null
    naturaleza?: EnumNaturalezaNullableFilter<"Humedal"> | $Enums.Naturaleza | null
    regimen_h?: EnumRegimenNullableFilter<"Humedal"> | $Enums.Regimen | null
    origen?: EnumOrigenNullableFilter<"Humedal"> | $Enums.Origen | null
    tipo?: EnumTipoNullableFilter<"Humedal"> | $Enums.Tipo | null
    clase?: StringNullableFilter<"Humedal"> | string | null
    instru_ges?: StringNullableFilter<"Humedal"> | string | null
    uso?: EnumUsoNullableListFilter<"Humedal">
    estado?: EnumEstadoNullableFilter<"Humedal"> | $Enums.Estado | null
    nivel_inte?: EnumNivelNullableFilter<"Humedal"> | $Enums.Nivel | null
    impactos?: EnumImpactoNullableListFilter<"Humedal">
    prioridad?: EnumPrioridadNullableFilter<"Humedal"> | $Enums.Prioridad | null
    accion?: EnumAccionNullableFilter<"Humedal"> | $Enums.Accion | null
    complejo?: StringNullableFilter<"Humedal"> | string | null
    cuenca?: StringNullableFilter<"Humedal"> | string | null
    subcuenca?: StringNullableFilter<"Humedal"> | string | null
    microcuenc?: StringNullableFilter<"Humedal"> | string | null
    area_h?: StringNullableFilter<"Humedal"> | string | null
    zona_h?: StringNullableFilter<"Humedal"> | string | null
    subzona_h?: StringNullableFilter<"Humedal"> | string | null
    foto?: StringNullableFilter<"Humedal"> | string | null
    descri_gen?: StringNullableFilter<"Humedal"> | string | null
    descri_bio?: StringNullableFilter<"Humedal"> | string | null
    descri_tec?: StringNullableFilter<"Humedal"> | string | null
  }

  export type HumedalOrderByWithRelationInput = {
    objectid?: SortOrder
    num_hum?: SortOrder
    nombre_hum?: SortOrderInput | SortOrder
    area_ha?: SortOrderInput | SortOrder
    perimetro?: SortOrderInput | SortOrder
    altitud?: SortOrderInput | SortOrder
    este?: SortOrderInput | SortOrder
    norte?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    latitud?: SortOrderInput | SortOrder
    fecha_act?: SortOrderInput | SortOrder
    cod_dane?: SortOrderInput | SortOrder
    municipio?: SortOrderInput | SortOrder
    departamen?: SortOrderInput | SortOrder
    vereda?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    jurisdicci?: SortOrderInput | SortOrder
    naturaleza?: SortOrderInput | SortOrder
    regimen_h?: SortOrderInput | SortOrder
    origen?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    clase?: SortOrderInput | SortOrder
    instru_ges?: SortOrderInput | SortOrder
    uso?: SortOrder
    estado?: SortOrderInput | SortOrder
    nivel_inte?: SortOrderInput | SortOrder
    impactos?: SortOrder
    prioridad?: SortOrderInput | SortOrder
    accion?: SortOrderInput | SortOrder
    complejo?: SortOrderInput | SortOrder
    cuenca?: SortOrderInput | SortOrder
    subcuenca?: SortOrderInput | SortOrder
    microcuenc?: SortOrderInput | SortOrder
    area_h?: SortOrderInput | SortOrder
    zona_h?: SortOrderInput | SortOrder
    subzona_h?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    descri_gen?: SortOrderInput | SortOrder
    descri_bio?: SortOrderInput | SortOrder
    descri_tec?: SortOrderInput | SortOrder
  }

  export type HumedalWhereUniqueInput = Prisma.AtLeast<{
    objectid?: number
    num_hum?: string
    AND?: HumedalWhereInput | HumedalWhereInput[]
    OR?: HumedalWhereInput[]
    NOT?: HumedalWhereInput | HumedalWhereInput[]
    nombre_hum?: StringNullableFilter<"Humedal"> | string | null
    area_ha?: FloatNullableFilter<"Humedal"> | number | null
    perimetro?: FloatNullableFilter<"Humedal"> | number | null
    altitud?: FloatNullableFilter<"Humedal"> | number | null
    este?: FloatNullableFilter<"Humedal"> | number | null
    norte?: FloatNullableFilter<"Humedal"> | number | null
    longitud?: FloatNullableFilter<"Humedal"> | number | null
    latitud?: FloatNullableFilter<"Humedal"> | number | null
    fecha_act?: DateTimeNullableFilter<"Humedal"> | Date | string | null
    cod_dane?: FloatNullableFilter<"Humedal"> | number | null
    municipio?: StringNullableFilter<"Humedal"> | string | null
    departamen?: StringNullableFilter<"Humedal"> | string | null
    vereda?: StringNullableFilter<"Humedal"> | string | null
    ubicacion?: EnumUbicacionNullableFilter<"Humedal"> | $Enums.Ubicacion | null
    jurisdicci?: StringNullableFilter<"Humedal"> | string | null
    naturaleza?: EnumNaturalezaNullableFilter<"Humedal"> | $Enums.Naturaleza | null
    regimen_h?: EnumRegimenNullableFilter<"Humedal"> | $Enums.Regimen | null
    origen?: EnumOrigenNullableFilter<"Humedal"> | $Enums.Origen | null
    tipo?: EnumTipoNullableFilter<"Humedal"> | $Enums.Tipo | null
    clase?: StringNullableFilter<"Humedal"> | string | null
    instru_ges?: StringNullableFilter<"Humedal"> | string | null
    uso?: EnumUsoNullableListFilter<"Humedal">
    estado?: EnumEstadoNullableFilter<"Humedal"> | $Enums.Estado | null
    nivel_inte?: EnumNivelNullableFilter<"Humedal"> | $Enums.Nivel | null
    impactos?: EnumImpactoNullableListFilter<"Humedal">
    prioridad?: EnumPrioridadNullableFilter<"Humedal"> | $Enums.Prioridad | null
    accion?: EnumAccionNullableFilter<"Humedal"> | $Enums.Accion | null
    complejo?: StringNullableFilter<"Humedal"> | string | null
    cuenca?: StringNullableFilter<"Humedal"> | string | null
    subcuenca?: StringNullableFilter<"Humedal"> | string | null
    microcuenc?: StringNullableFilter<"Humedal"> | string | null
    area_h?: StringNullableFilter<"Humedal"> | string | null
    zona_h?: StringNullableFilter<"Humedal"> | string | null
    subzona_h?: StringNullableFilter<"Humedal"> | string | null
    foto?: StringNullableFilter<"Humedal"> | string | null
    descri_gen?: StringNullableFilter<"Humedal"> | string | null
    descri_bio?: StringNullableFilter<"Humedal"> | string | null
    descri_tec?: StringNullableFilter<"Humedal"> | string | null
  }, "objectid" | "num_hum">

  export type HumedalOrderByWithAggregationInput = {
    objectid?: SortOrder
    num_hum?: SortOrder
    nombre_hum?: SortOrderInput | SortOrder
    area_ha?: SortOrderInput | SortOrder
    perimetro?: SortOrderInput | SortOrder
    altitud?: SortOrderInput | SortOrder
    este?: SortOrderInput | SortOrder
    norte?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    latitud?: SortOrderInput | SortOrder
    fecha_act?: SortOrderInput | SortOrder
    cod_dane?: SortOrderInput | SortOrder
    municipio?: SortOrderInput | SortOrder
    departamen?: SortOrderInput | SortOrder
    vereda?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    jurisdicci?: SortOrderInput | SortOrder
    naturaleza?: SortOrderInput | SortOrder
    regimen_h?: SortOrderInput | SortOrder
    origen?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    clase?: SortOrderInput | SortOrder
    instru_ges?: SortOrderInput | SortOrder
    uso?: SortOrder
    estado?: SortOrderInput | SortOrder
    nivel_inte?: SortOrderInput | SortOrder
    impactos?: SortOrder
    prioridad?: SortOrderInput | SortOrder
    accion?: SortOrderInput | SortOrder
    complejo?: SortOrderInput | SortOrder
    cuenca?: SortOrderInput | SortOrder
    subcuenca?: SortOrderInput | SortOrder
    microcuenc?: SortOrderInput | SortOrder
    area_h?: SortOrderInput | SortOrder
    zona_h?: SortOrderInput | SortOrder
    subzona_h?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    descri_gen?: SortOrderInput | SortOrder
    descri_bio?: SortOrderInput | SortOrder
    descri_tec?: SortOrderInput | SortOrder
    _count?: HumedalCountOrderByAggregateInput
    _avg?: HumedalAvgOrderByAggregateInput
    _max?: HumedalMaxOrderByAggregateInput
    _min?: HumedalMinOrderByAggregateInput
    _sum?: HumedalSumOrderByAggregateInput
  }

  export type HumedalScalarWhereWithAggregatesInput = {
    AND?: HumedalScalarWhereWithAggregatesInput | HumedalScalarWhereWithAggregatesInput[]
    OR?: HumedalScalarWhereWithAggregatesInput[]
    NOT?: HumedalScalarWhereWithAggregatesInput | HumedalScalarWhereWithAggregatesInput[]
    objectid?: IntWithAggregatesFilter<"Humedal"> | number
    num_hum?: StringWithAggregatesFilter<"Humedal"> | string
    nombre_hum?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    area_ha?: FloatNullableWithAggregatesFilter<"Humedal"> | number | null
    perimetro?: FloatNullableWithAggregatesFilter<"Humedal"> | number | null
    altitud?: FloatNullableWithAggregatesFilter<"Humedal"> | number | null
    este?: FloatNullableWithAggregatesFilter<"Humedal"> | number | null
    norte?: FloatNullableWithAggregatesFilter<"Humedal"> | number | null
    longitud?: FloatNullableWithAggregatesFilter<"Humedal"> | number | null
    latitud?: FloatNullableWithAggregatesFilter<"Humedal"> | number | null
    fecha_act?: DateTimeNullableWithAggregatesFilter<"Humedal"> | Date | string | null
    cod_dane?: FloatNullableWithAggregatesFilter<"Humedal"> | number | null
    municipio?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    departamen?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    vereda?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    ubicacion?: EnumUbicacionNullableWithAggregatesFilter<"Humedal"> | $Enums.Ubicacion | null
    jurisdicci?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    naturaleza?: EnumNaturalezaNullableWithAggregatesFilter<"Humedal"> | $Enums.Naturaleza | null
    regimen_h?: EnumRegimenNullableWithAggregatesFilter<"Humedal"> | $Enums.Regimen | null
    origen?: EnumOrigenNullableWithAggregatesFilter<"Humedal"> | $Enums.Origen | null
    tipo?: EnumTipoNullableWithAggregatesFilter<"Humedal"> | $Enums.Tipo | null
    clase?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    instru_ges?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    uso?: EnumUsoNullableListFilter<"Humedal">
    estado?: EnumEstadoNullableWithAggregatesFilter<"Humedal"> | $Enums.Estado | null
    nivel_inte?: EnumNivelNullableWithAggregatesFilter<"Humedal"> | $Enums.Nivel | null
    impactos?: EnumImpactoNullableListFilter<"Humedal">
    prioridad?: EnumPrioridadNullableWithAggregatesFilter<"Humedal"> | $Enums.Prioridad | null
    accion?: EnumAccionNullableWithAggregatesFilter<"Humedal"> | $Enums.Accion | null
    complejo?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    cuenca?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    subcuenca?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    microcuenc?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    area_h?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    zona_h?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    subzona_h?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    foto?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    descri_gen?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    descri_bio?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
    descri_tec?: StringNullableWithAggregatesFilter<"Humedal"> | string | null
  }

  export type HumedalCreateInput = {
    num_hum: string
    nombre_hum?: string | null
    area_ha?: number | null
    perimetro?: number | null
    altitud?: number | null
    este?: number | null
    norte?: number | null
    longitud?: number | null
    latitud?: number | null
    fecha_act?: Date | string | null
    cod_dane?: number | null
    municipio?: string | null
    departamen?: string | null
    vereda?: string | null
    ubicacion?: $Enums.Ubicacion | null
    jurisdicci?: string | null
    naturaleza?: $Enums.Naturaleza | null
    regimen_h?: $Enums.Regimen | null
    origen?: $Enums.Origen | null
    tipo?: $Enums.Tipo | null
    clase?: string | null
    instru_ges?: string | null
    uso?: HumedalCreateusoInput | $Enums.Uso[]
    estado?: $Enums.Estado | null
    nivel_inte?: $Enums.Nivel | null
    impactos?: HumedalCreateimpactosInput | $Enums.Impacto[]
    prioridad?: $Enums.Prioridad | null
    accion?: $Enums.Accion | null
    complejo?: string | null
    cuenca?: string | null
    subcuenca?: string | null
    microcuenc?: string | null
    area_h?: string | null
    zona_h?: string | null
    subzona_h?: string | null
    foto?: string | null
    descri_gen?: string | null
    descri_bio?: string | null
    descri_tec?: string | null
  }

  export type HumedalUncheckedCreateInput = {
    objectid?: number
    num_hum: string
    nombre_hum?: string | null
    area_ha?: number | null
    perimetro?: number | null
    altitud?: number | null
    este?: number | null
    norte?: number | null
    longitud?: number | null
    latitud?: number | null
    fecha_act?: Date | string | null
    cod_dane?: number | null
    municipio?: string | null
    departamen?: string | null
    vereda?: string | null
    ubicacion?: $Enums.Ubicacion | null
    jurisdicci?: string | null
    naturaleza?: $Enums.Naturaleza | null
    regimen_h?: $Enums.Regimen | null
    origen?: $Enums.Origen | null
    tipo?: $Enums.Tipo | null
    clase?: string | null
    instru_ges?: string | null
    uso?: HumedalCreateusoInput | $Enums.Uso[]
    estado?: $Enums.Estado | null
    nivel_inte?: $Enums.Nivel | null
    impactos?: HumedalCreateimpactosInput | $Enums.Impacto[]
    prioridad?: $Enums.Prioridad | null
    accion?: $Enums.Accion | null
    complejo?: string | null
    cuenca?: string | null
    subcuenca?: string | null
    microcuenc?: string | null
    area_h?: string | null
    zona_h?: string | null
    subzona_h?: string | null
    foto?: string | null
    descri_gen?: string | null
    descri_bio?: string | null
    descri_tec?: string | null
  }

  export type HumedalUpdateInput = {
    num_hum?: StringFieldUpdateOperationsInput | string
    nombre_hum?: NullableStringFieldUpdateOperationsInput | string | null
    area_ha?: NullableFloatFieldUpdateOperationsInput | number | null
    perimetro?: NullableFloatFieldUpdateOperationsInput | number | null
    altitud?: NullableFloatFieldUpdateOperationsInput | number | null
    este?: NullableFloatFieldUpdateOperationsInput | number | null
    norte?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha_act?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cod_dane?: NullableFloatFieldUpdateOperationsInput | number | null
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    departamen?: NullableStringFieldUpdateOperationsInput | string | null
    vereda?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableEnumUbicacionFieldUpdateOperationsInput | $Enums.Ubicacion | null
    jurisdicci?: NullableStringFieldUpdateOperationsInput | string | null
    naturaleza?: NullableEnumNaturalezaFieldUpdateOperationsInput | $Enums.Naturaleza | null
    regimen_h?: NullableEnumRegimenFieldUpdateOperationsInput | $Enums.Regimen | null
    origen?: NullableEnumOrigenFieldUpdateOperationsInput | $Enums.Origen | null
    tipo?: NullableEnumTipoFieldUpdateOperationsInput | $Enums.Tipo | null
    clase?: NullableStringFieldUpdateOperationsInput | string | null
    instru_ges?: NullableStringFieldUpdateOperationsInput | string | null
    uso?: HumedalUpdateusoInput | $Enums.Uso[]
    estado?: NullableEnumEstadoFieldUpdateOperationsInput | $Enums.Estado | null
    nivel_inte?: NullableEnumNivelFieldUpdateOperationsInput | $Enums.Nivel | null
    impactos?: HumedalUpdateimpactosInput | $Enums.Impacto[]
    prioridad?: NullableEnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad | null
    accion?: NullableEnumAccionFieldUpdateOperationsInput | $Enums.Accion | null
    complejo?: NullableStringFieldUpdateOperationsInput | string | null
    cuenca?: NullableStringFieldUpdateOperationsInput | string | null
    subcuenca?: NullableStringFieldUpdateOperationsInput | string | null
    microcuenc?: NullableStringFieldUpdateOperationsInput | string | null
    area_h?: NullableStringFieldUpdateOperationsInput | string | null
    zona_h?: NullableStringFieldUpdateOperationsInput | string | null
    subzona_h?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descri_gen?: NullableStringFieldUpdateOperationsInput | string | null
    descri_bio?: NullableStringFieldUpdateOperationsInput | string | null
    descri_tec?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HumedalUncheckedUpdateInput = {
    objectid?: IntFieldUpdateOperationsInput | number
    num_hum?: StringFieldUpdateOperationsInput | string
    nombre_hum?: NullableStringFieldUpdateOperationsInput | string | null
    area_ha?: NullableFloatFieldUpdateOperationsInput | number | null
    perimetro?: NullableFloatFieldUpdateOperationsInput | number | null
    altitud?: NullableFloatFieldUpdateOperationsInput | number | null
    este?: NullableFloatFieldUpdateOperationsInput | number | null
    norte?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha_act?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cod_dane?: NullableFloatFieldUpdateOperationsInput | number | null
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    departamen?: NullableStringFieldUpdateOperationsInput | string | null
    vereda?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableEnumUbicacionFieldUpdateOperationsInput | $Enums.Ubicacion | null
    jurisdicci?: NullableStringFieldUpdateOperationsInput | string | null
    naturaleza?: NullableEnumNaturalezaFieldUpdateOperationsInput | $Enums.Naturaleza | null
    regimen_h?: NullableEnumRegimenFieldUpdateOperationsInput | $Enums.Regimen | null
    origen?: NullableEnumOrigenFieldUpdateOperationsInput | $Enums.Origen | null
    tipo?: NullableEnumTipoFieldUpdateOperationsInput | $Enums.Tipo | null
    clase?: NullableStringFieldUpdateOperationsInput | string | null
    instru_ges?: NullableStringFieldUpdateOperationsInput | string | null
    uso?: HumedalUpdateusoInput | $Enums.Uso[]
    estado?: NullableEnumEstadoFieldUpdateOperationsInput | $Enums.Estado | null
    nivel_inte?: NullableEnumNivelFieldUpdateOperationsInput | $Enums.Nivel | null
    impactos?: HumedalUpdateimpactosInput | $Enums.Impacto[]
    prioridad?: NullableEnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad | null
    accion?: NullableEnumAccionFieldUpdateOperationsInput | $Enums.Accion | null
    complejo?: NullableStringFieldUpdateOperationsInput | string | null
    cuenca?: NullableStringFieldUpdateOperationsInput | string | null
    subcuenca?: NullableStringFieldUpdateOperationsInput | string | null
    microcuenc?: NullableStringFieldUpdateOperationsInput | string | null
    area_h?: NullableStringFieldUpdateOperationsInput | string | null
    zona_h?: NullableStringFieldUpdateOperationsInput | string | null
    subzona_h?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descri_gen?: NullableStringFieldUpdateOperationsInput | string | null
    descri_bio?: NullableStringFieldUpdateOperationsInput | string | null
    descri_tec?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HumedalCreateManyInput = {
    objectid?: number
    num_hum: string
    nombre_hum?: string | null
    area_ha?: number | null
    perimetro?: number | null
    altitud?: number | null
    este?: number | null
    norte?: number | null
    longitud?: number | null
    latitud?: number | null
    fecha_act?: Date | string | null
    cod_dane?: number | null
    municipio?: string | null
    departamen?: string | null
    vereda?: string | null
    ubicacion?: $Enums.Ubicacion | null
    jurisdicci?: string | null
    naturaleza?: $Enums.Naturaleza | null
    regimen_h?: $Enums.Regimen | null
    origen?: $Enums.Origen | null
    tipo?: $Enums.Tipo | null
    clase?: string | null
    instru_ges?: string | null
    uso?: HumedalCreateusoInput | $Enums.Uso[]
    estado?: $Enums.Estado | null
    nivel_inte?: $Enums.Nivel | null
    impactos?: HumedalCreateimpactosInput | $Enums.Impacto[]
    prioridad?: $Enums.Prioridad | null
    accion?: $Enums.Accion | null
    complejo?: string | null
    cuenca?: string | null
    subcuenca?: string | null
    microcuenc?: string | null
    area_h?: string | null
    zona_h?: string | null
    subzona_h?: string | null
    foto?: string | null
    descri_gen?: string | null
    descri_bio?: string | null
    descri_tec?: string | null
  }

  export type HumedalUpdateManyMutationInput = {
    num_hum?: StringFieldUpdateOperationsInput | string
    nombre_hum?: NullableStringFieldUpdateOperationsInput | string | null
    area_ha?: NullableFloatFieldUpdateOperationsInput | number | null
    perimetro?: NullableFloatFieldUpdateOperationsInput | number | null
    altitud?: NullableFloatFieldUpdateOperationsInput | number | null
    este?: NullableFloatFieldUpdateOperationsInput | number | null
    norte?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha_act?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cod_dane?: NullableFloatFieldUpdateOperationsInput | number | null
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    departamen?: NullableStringFieldUpdateOperationsInput | string | null
    vereda?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableEnumUbicacionFieldUpdateOperationsInput | $Enums.Ubicacion | null
    jurisdicci?: NullableStringFieldUpdateOperationsInput | string | null
    naturaleza?: NullableEnumNaturalezaFieldUpdateOperationsInput | $Enums.Naturaleza | null
    regimen_h?: NullableEnumRegimenFieldUpdateOperationsInput | $Enums.Regimen | null
    origen?: NullableEnumOrigenFieldUpdateOperationsInput | $Enums.Origen | null
    tipo?: NullableEnumTipoFieldUpdateOperationsInput | $Enums.Tipo | null
    clase?: NullableStringFieldUpdateOperationsInput | string | null
    instru_ges?: NullableStringFieldUpdateOperationsInput | string | null
    uso?: HumedalUpdateusoInput | $Enums.Uso[]
    estado?: NullableEnumEstadoFieldUpdateOperationsInput | $Enums.Estado | null
    nivel_inte?: NullableEnumNivelFieldUpdateOperationsInput | $Enums.Nivel | null
    impactos?: HumedalUpdateimpactosInput | $Enums.Impacto[]
    prioridad?: NullableEnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad | null
    accion?: NullableEnumAccionFieldUpdateOperationsInput | $Enums.Accion | null
    complejo?: NullableStringFieldUpdateOperationsInput | string | null
    cuenca?: NullableStringFieldUpdateOperationsInput | string | null
    subcuenca?: NullableStringFieldUpdateOperationsInput | string | null
    microcuenc?: NullableStringFieldUpdateOperationsInput | string | null
    area_h?: NullableStringFieldUpdateOperationsInput | string | null
    zona_h?: NullableStringFieldUpdateOperationsInput | string | null
    subzona_h?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descri_gen?: NullableStringFieldUpdateOperationsInput | string | null
    descri_bio?: NullableStringFieldUpdateOperationsInput | string | null
    descri_tec?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HumedalUncheckedUpdateManyInput = {
    objectid?: IntFieldUpdateOperationsInput | number
    num_hum?: StringFieldUpdateOperationsInput | string
    nombre_hum?: NullableStringFieldUpdateOperationsInput | string | null
    area_ha?: NullableFloatFieldUpdateOperationsInput | number | null
    perimetro?: NullableFloatFieldUpdateOperationsInput | number | null
    altitud?: NullableFloatFieldUpdateOperationsInput | number | null
    este?: NullableFloatFieldUpdateOperationsInput | number | null
    norte?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha_act?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cod_dane?: NullableFloatFieldUpdateOperationsInput | number | null
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    departamen?: NullableStringFieldUpdateOperationsInput | string | null
    vereda?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableEnumUbicacionFieldUpdateOperationsInput | $Enums.Ubicacion | null
    jurisdicci?: NullableStringFieldUpdateOperationsInput | string | null
    naturaleza?: NullableEnumNaturalezaFieldUpdateOperationsInput | $Enums.Naturaleza | null
    regimen_h?: NullableEnumRegimenFieldUpdateOperationsInput | $Enums.Regimen | null
    origen?: NullableEnumOrigenFieldUpdateOperationsInput | $Enums.Origen | null
    tipo?: NullableEnumTipoFieldUpdateOperationsInput | $Enums.Tipo | null
    clase?: NullableStringFieldUpdateOperationsInput | string | null
    instru_ges?: NullableStringFieldUpdateOperationsInput | string | null
    uso?: HumedalUpdateusoInput | $Enums.Uso[]
    estado?: NullableEnumEstadoFieldUpdateOperationsInput | $Enums.Estado | null
    nivel_inte?: NullableEnumNivelFieldUpdateOperationsInput | $Enums.Nivel | null
    impactos?: HumedalUpdateimpactosInput | $Enums.Impacto[]
    prioridad?: NullableEnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad | null
    accion?: NullableEnumAccionFieldUpdateOperationsInput | $Enums.Accion | null
    complejo?: NullableStringFieldUpdateOperationsInput | string | null
    cuenca?: NullableStringFieldUpdateOperationsInput | string | null
    subcuenca?: NullableStringFieldUpdateOperationsInput | string | null
    microcuenc?: NullableStringFieldUpdateOperationsInput | string | null
    area_h?: NullableStringFieldUpdateOperationsInput | string | null
    zona_h?: NullableStringFieldUpdateOperationsInput | string | null
    subzona_h?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    descri_gen?: NullableStringFieldUpdateOperationsInput | string | null
    descri_bio?: NullableStringFieldUpdateOperationsInput | string | null
    descri_tec?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumUbicacionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Ubicacion | EnumUbicacionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Ubicacion[] | ListEnumUbicacionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Ubicacion[] | ListEnumUbicacionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUbicacionNullableFilter<$PrismaModel> | $Enums.Ubicacion | null
  }

  export type EnumNaturalezaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Naturaleza | EnumNaturalezaFieldRefInput<$PrismaModel> | null
    in?: $Enums.Naturaleza[] | ListEnumNaturalezaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Naturaleza[] | ListEnumNaturalezaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNaturalezaNullableFilter<$PrismaModel> | $Enums.Naturaleza | null
  }

  export type EnumRegimenNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Regimen | EnumRegimenFieldRefInput<$PrismaModel> | null
    in?: $Enums.Regimen[] | ListEnumRegimenFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Regimen[] | ListEnumRegimenFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegimenNullableFilter<$PrismaModel> | $Enums.Regimen | null
  }

  export type EnumOrigenNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Origen | EnumOrigenFieldRefInput<$PrismaModel> | null
    in?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrigenNullableFilter<$PrismaModel> | $Enums.Origen | null
  }

  export type EnumTipoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipoNullableFilter<$PrismaModel> | $Enums.Tipo | null
  }

  export type EnumUsoNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Uso[] | ListEnumUsoFieldRefInput<$PrismaModel> | null
    has?: $Enums.Uso | EnumUsoFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Uso[] | ListEnumUsoFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Uso[] | ListEnumUsoFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumEstadoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEstadoNullableFilter<$PrismaModel> | $Enums.Estado | null
  }

  export type EnumNivelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Nivel | EnumNivelFieldRefInput<$PrismaModel> | null
    in?: $Enums.Nivel[] | ListEnumNivelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Nivel[] | ListEnumNivelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNivelNullableFilter<$PrismaModel> | $Enums.Nivel | null
  }

  export type EnumImpactoNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Impacto[] | ListEnumImpactoFieldRefInput<$PrismaModel> | null
    has?: $Enums.Impacto | EnumImpactoFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Impacto[] | ListEnumImpactoFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Impacto[] | ListEnumImpactoFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPrioridadNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel> | null
    in?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPrioridadNullableFilter<$PrismaModel> | $Enums.Prioridad | null
  }

  export type EnumAccionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Accion | EnumAccionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAccionNullableFilter<$PrismaModel> | $Enums.Accion | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HumedalCountOrderByAggregateInput = {
    objectid?: SortOrder
    num_hum?: SortOrder
    nombre_hum?: SortOrder
    area_ha?: SortOrder
    perimetro?: SortOrder
    altitud?: SortOrder
    este?: SortOrder
    norte?: SortOrder
    longitud?: SortOrder
    latitud?: SortOrder
    fecha_act?: SortOrder
    cod_dane?: SortOrder
    municipio?: SortOrder
    departamen?: SortOrder
    vereda?: SortOrder
    ubicacion?: SortOrder
    jurisdicci?: SortOrder
    naturaleza?: SortOrder
    regimen_h?: SortOrder
    origen?: SortOrder
    tipo?: SortOrder
    clase?: SortOrder
    instru_ges?: SortOrder
    uso?: SortOrder
    estado?: SortOrder
    nivel_inte?: SortOrder
    impactos?: SortOrder
    prioridad?: SortOrder
    accion?: SortOrder
    complejo?: SortOrder
    cuenca?: SortOrder
    subcuenca?: SortOrder
    microcuenc?: SortOrder
    area_h?: SortOrder
    zona_h?: SortOrder
    subzona_h?: SortOrder
    foto?: SortOrder
    descri_gen?: SortOrder
    descri_bio?: SortOrder
    descri_tec?: SortOrder
  }

  export type HumedalAvgOrderByAggregateInput = {
    objectid?: SortOrder
    area_ha?: SortOrder
    perimetro?: SortOrder
    altitud?: SortOrder
    este?: SortOrder
    norte?: SortOrder
    longitud?: SortOrder
    latitud?: SortOrder
    cod_dane?: SortOrder
  }

  export type HumedalMaxOrderByAggregateInput = {
    objectid?: SortOrder
    num_hum?: SortOrder
    nombre_hum?: SortOrder
    area_ha?: SortOrder
    perimetro?: SortOrder
    altitud?: SortOrder
    este?: SortOrder
    norte?: SortOrder
    longitud?: SortOrder
    latitud?: SortOrder
    fecha_act?: SortOrder
    cod_dane?: SortOrder
    municipio?: SortOrder
    departamen?: SortOrder
    vereda?: SortOrder
    ubicacion?: SortOrder
    jurisdicci?: SortOrder
    naturaleza?: SortOrder
    regimen_h?: SortOrder
    origen?: SortOrder
    tipo?: SortOrder
    clase?: SortOrder
    instru_ges?: SortOrder
    estado?: SortOrder
    nivel_inte?: SortOrder
    prioridad?: SortOrder
    accion?: SortOrder
    complejo?: SortOrder
    cuenca?: SortOrder
    subcuenca?: SortOrder
    microcuenc?: SortOrder
    area_h?: SortOrder
    zona_h?: SortOrder
    subzona_h?: SortOrder
    foto?: SortOrder
    descri_gen?: SortOrder
    descri_bio?: SortOrder
    descri_tec?: SortOrder
  }

  export type HumedalMinOrderByAggregateInput = {
    objectid?: SortOrder
    num_hum?: SortOrder
    nombre_hum?: SortOrder
    area_ha?: SortOrder
    perimetro?: SortOrder
    altitud?: SortOrder
    este?: SortOrder
    norte?: SortOrder
    longitud?: SortOrder
    latitud?: SortOrder
    fecha_act?: SortOrder
    cod_dane?: SortOrder
    municipio?: SortOrder
    departamen?: SortOrder
    vereda?: SortOrder
    ubicacion?: SortOrder
    jurisdicci?: SortOrder
    naturaleza?: SortOrder
    regimen_h?: SortOrder
    origen?: SortOrder
    tipo?: SortOrder
    clase?: SortOrder
    instru_ges?: SortOrder
    estado?: SortOrder
    nivel_inte?: SortOrder
    prioridad?: SortOrder
    accion?: SortOrder
    complejo?: SortOrder
    cuenca?: SortOrder
    subcuenca?: SortOrder
    microcuenc?: SortOrder
    area_h?: SortOrder
    zona_h?: SortOrder
    subzona_h?: SortOrder
    foto?: SortOrder
    descri_gen?: SortOrder
    descri_bio?: SortOrder
    descri_tec?: SortOrder
  }

  export type HumedalSumOrderByAggregateInput = {
    objectid?: SortOrder
    area_ha?: SortOrder
    perimetro?: SortOrder
    altitud?: SortOrder
    este?: SortOrder
    norte?: SortOrder
    longitud?: SortOrder
    latitud?: SortOrder
    cod_dane?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUbicacionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Ubicacion | EnumUbicacionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Ubicacion[] | ListEnumUbicacionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Ubicacion[] | ListEnumUbicacionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUbicacionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Ubicacion | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUbicacionNullableFilter<$PrismaModel>
    _max?: NestedEnumUbicacionNullableFilter<$PrismaModel>
  }

  export type EnumNaturalezaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Naturaleza | EnumNaturalezaFieldRefInput<$PrismaModel> | null
    in?: $Enums.Naturaleza[] | ListEnumNaturalezaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Naturaleza[] | ListEnumNaturalezaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNaturalezaNullableWithAggregatesFilter<$PrismaModel> | $Enums.Naturaleza | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNaturalezaNullableFilter<$PrismaModel>
    _max?: NestedEnumNaturalezaNullableFilter<$PrismaModel>
  }

  export type EnumRegimenNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Regimen | EnumRegimenFieldRefInput<$PrismaModel> | null
    in?: $Enums.Regimen[] | ListEnumRegimenFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Regimen[] | ListEnumRegimenFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegimenNullableWithAggregatesFilter<$PrismaModel> | $Enums.Regimen | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegimenNullableFilter<$PrismaModel>
    _max?: NestedEnumRegimenNullableFilter<$PrismaModel>
  }

  export type EnumOrigenNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Origen | EnumOrigenFieldRefInput<$PrismaModel> | null
    in?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrigenNullableWithAggregatesFilter<$PrismaModel> | $Enums.Origen | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOrigenNullableFilter<$PrismaModel>
    _max?: NestedEnumOrigenNullableFilter<$PrismaModel>
  }

  export type EnumTipoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipoNullableWithAggregatesFilter<$PrismaModel> | $Enums.Tipo | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTipoNullableFilter<$PrismaModel>
    _max?: NestedEnumTipoNullableFilter<$PrismaModel>
  }

  export type EnumEstadoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEstadoNullableWithAggregatesFilter<$PrismaModel> | $Enums.Estado | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEstadoNullableFilter<$PrismaModel>
    _max?: NestedEnumEstadoNullableFilter<$PrismaModel>
  }

  export type EnumNivelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Nivel | EnumNivelFieldRefInput<$PrismaModel> | null
    in?: $Enums.Nivel[] | ListEnumNivelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Nivel[] | ListEnumNivelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNivelNullableWithAggregatesFilter<$PrismaModel> | $Enums.Nivel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNivelNullableFilter<$PrismaModel>
    _max?: NestedEnumNivelNullableFilter<$PrismaModel>
  }

  export type EnumPrioridadNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel> | null
    in?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPrioridadNullableWithAggregatesFilter<$PrismaModel> | $Enums.Prioridad | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPrioridadNullableFilter<$PrismaModel>
    _max?: NestedEnumPrioridadNullableFilter<$PrismaModel>
  }

  export type EnumAccionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Accion | EnumAccionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAccionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Accion | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAccionNullableFilter<$PrismaModel>
    _max?: NestedEnumAccionNullableFilter<$PrismaModel>
  }

  export type HumedalCreateusoInput = {
    set: $Enums.Uso[]
  }

  export type HumedalCreateimpactosInput = {
    set: $Enums.Impacto[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumUbicacionFieldUpdateOperationsInput = {
    set?: $Enums.Ubicacion | null
  }

  export type NullableEnumNaturalezaFieldUpdateOperationsInput = {
    set?: $Enums.Naturaleza | null
  }

  export type NullableEnumRegimenFieldUpdateOperationsInput = {
    set?: $Enums.Regimen | null
  }

  export type NullableEnumOrigenFieldUpdateOperationsInput = {
    set?: $Enums.Origen | null
  }

  export type NullableEnumTipoFieldUpdateOperationsInput = {
    set?: $Enums.Tipo | null
  }

  export type HumedalUpdateusoInput = {
    set?: $Enums.Uso[]
    push?: $Enums.Uso | $Enums.Uso[]
  }

  export type NullableEnumEstadoFieldUpdateOperationsInput = {
    set?: $Enums.Estado | null
  }

  export type NullableEnumNivelFieldUpdateOperationsInput = {
    set?: $Enums.Nivel | null
  }

  export type HumedalUpdateimpactosInput = {
    set?: $Enums.Impacto[]
    push?: $Enums.Impacto | $Enums.Impacto[]
  }

  export type NullableEnumPrioridadFieldUpdateOperationsInput = {
    set?: $Enums.Prioridad | null
  }

  export type NullableEnumAccionFieldUpdateOperationsInput = {
    set?: $Enums.Accion | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUbicacionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Ubicacion | EnumUbicacionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Ubicacion[] | ListEnumUbicacionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Ubicacion[] | ListEnumUbicacionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUbicacionNullableFilter<$PrismaModel> | $Enums.Ubicacion | null
  }

  export type NestedEnumNaturalezaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Naturaleza | EnumNaturalezaFieldRefInput<$PrismaModel> | null
    in?: $Enums.Naturaleza[] | ListEnumNaturalezaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Naturaleza[] | ListEnumNaturalezaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNaturalezaNullableFilter<$PrismaModel> | $Enums.Naturaleza | null
  }

  export type NestedEnumRegimenNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Regimen | EnumRegimenFieldRefInput<$PrismaModel> | null
    in?: $Enums.Regimen[] | ListEnumRegimenFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Regimen[] | ListEnumRegimenFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegimenNullableFilter<$PrismaModel> | $Enums.Regimen | null
  }

  export type NestedEnumOrigenNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Origen | EnumOrigenFieldRefInput<$PrismaModel> | null
    in?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrigenNullableFilter<$PrismaModel> | $Enums.Origen | null
  }

  export type NestedEnumTipoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipoNullableFilter<$PrismaModel> | $Enums.Tipo | null
  }

  export type NestedEnumEstadoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEstadoNullableFilter<$PrismaModel> | $Enums.Estado | null
  }

  export type NestedEnumNivelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Nivel | EnumNivelFieldRefInput<$PrismaModel> | null
    in?: $Enums.Nivel[] | ListEnumNivelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Nivel[] | ListEnumNivelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNivelNullableFilter<$PrismaModel> | $Enums.Nivel | null
  }

  export type NestedEnumPrioridadNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel> | null
    in?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPrioridadNullableFilter<$PrismaModel> | $Enums.Prioridad | null
  }

  export type NestedEnumAccionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Accion | EnumAccionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAccionNullableFilter<$PrismaModel> | $Enums.Accion | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUbicacionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Ubicacion | EnumUbicacionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Ubicacion[] | ListEnumUbicacionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Ubicacion[] | ListEnumUbicacionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUbicacionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Ubicacion | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUbicacionNullableFilter<$PrismaModel>
    _max?: NestedEnumUbicacionNullableFilter<$PrismaModel>
  }

  export type NestedEnumNaturalezaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Naturaleza | EnumNaturalezaFieldRefInput<$PrismaModel> | null
    in?: $Enums.Naturaleza[] | ListEnumNaturalezaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Naturaleza[] | ListEnumNaturalezaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNaturalezaNullableWithAggregatesFilter<$PrismaModel> | $Enums.Naturaleza | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNaturalezaNullableFilter<$PrismaModel>
    _max?: NestedEnumNaturalezaNullableFilter<$PrismaModel>
  }

  export type NestedEnumRegimenNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Regimen | EnumRegimenFieldRefInput<$PrismaModel> | null
    in?: $Enums.Regimen[] | ListEnumRegimenFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Regimen[] | ListEnumRegimenFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegimenNullableWithAggregatesFilter<$PrismaModel> | $Enums.Regimen | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegimenNullableFilter<$PrismaModel>
    _max?: NestedEnumRegimenNullableFilter<$PrismaModel>
  }

  export type NestedEnumOrigenNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Origen | EnumOrigenFieldRefInput<$PrismaModel> | null
    in?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrigenNullableWithAggregatesFilter<$PrismaModel> | $Enums.Origen | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOrigenNullableFilter<$PrismaModel>
    _max?: NestedEnumOrigenNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipoNullableWithAggregatesFilter<$PrismaModel> | $Enums.Tipo | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTipoNullableFilter<$PrismaModel>
    _max?: NestedEnumTipoNullableFilter<$PrismaModel>
  }

  export type NestedEnumEstadoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEstadoNullableWithAggregatesFilter<$PrismaModel> | $Enums.Estado | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEstadoNullableFilter<$PrismaModel>
    _max?: NestedEnumEstadoNullableFilter<$PrismaModel>
  }

  export type NestedEnumNivelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Nivel | EnumNivelFieldRefInput<$PrismaModel> | null
    in?: $Enums.Nivel[] | ListEnumNivelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Nivel[] | ListEnumNivelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNivelNullableWithAggregatesFilter<$PrismaModel> | $Enums.Nivel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNivelNullableFilter<$PrismaModel>
    _max?: NestedEnumNivelNullableFilter<$PrismaModel>
  }

  export type NestedEnumPrioridadNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel> | null
    in?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPrioridadNullableWithAggregatesFilter<$PrismaModel> | $Enums.Prioridad | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPrioridadNullableFilter<$PrismaModel>
    _max?: NestedEnumPrioridadNullableFilter<$PrismaModel>
  }

  export type NestedEnumAccionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Accion | EnumAccionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAccionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Accion | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAccionNullableFilter<$PrismaModel>
    _max?: NestedEnumAccionNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}