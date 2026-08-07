
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
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductIngredient
 * 
 */
export type ProductIngredient = $Result.DefaultSelection<Prisma.$ProductIngredientPayload>
/**
 * Model Provider
 * 
 */
export type Provider = $Result.DefaultSelection<Prisma.$ProviderPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model SaleProduct
 * 
 */
export type SaleProduct = $Result.DefaultSelection<Prisma.$SaleProductPayload>
/**
 * Model SaleProductAddition
 * 
 */
export type SaleProductAddition = $Result.DefaultSelection<Prisma.$SaleProductAdditionPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Utils
 * 
 */
export type Utils = $Result.DefaultSelection<Prisma.$UtilsPayload>
/**
 * Model ProviderMovement
 * 
 */
export type ProviderMovement = $Result.DefaultSelection<Prisma.$ProviderMovementPayload>
/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alerts
 * const alerts = await prisma.alert.findMany()
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
   * // Fetch zero or more Alerts
   * const alerts = await prisma.alert.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.productIngredient`: Exposes CRUD operations for the **ProductIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductIngredients
    * const productIngredients = await prisma.productIngredient.findMany()
    * ```
    */
  get productIngredient(): Prisma.ProductIngredientDelegate<ExtArgs>;

  /**
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<ExtArgs>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs>;

  /**
   * `prisma.saleProduct`: Exposes CRUD operations for the **SaleProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleProducts
    * const saleProducts = await prisma.saleProduct.findMany()
    * ```
    */
  get saleProduct(): Prisma.SaleProductDelegate<ExtArgs>;

  /**
   * `prisma.saleProductAddition`: Exposes CRUD operations for the **SaleProductAddition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleProductAdditions
    * const saleProductAdditions = await prisma.saleProductAddition.findMany()
    * ```
    */
  get saleProductAddition(): Prisma.SaleProductAdditionDelegate<ExtArgs>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.utils`: Exposes CRUD operations for the **Utils** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utils
    * const utils = await prisma.utils.findMany()
    * ```
    */
  get utils(): Prisma.UtilsDelegate<ExtArgs>;

  /**
   * `prisma.providerMovement`: Exposes CRUD operations for the **ProviderMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderMovements
    * const providerMovements = await prisma.providerMovement.findMany()
    * ```
    */
  get providerMovement(): Prisma.ProviderMovementDelegate<ExtArgs>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Alert: 'Alert',
    Game: 'Game',
    Ingredient: 'Ingredient',
    Product: 'Product',
    ProductIngredient: 'ProductIngredient',
    Provider: 'Provider',
    Sale: 'Sale',
    SaleProduct: 'SaleProduct',
    SaleProductAddition: 'SaleProductAddition',
    Subscription: 'Subscription',
    User: 'User',
    Utils: 'Utils',
    ProviderMovement: 'ProviderMovement',
    Business: 'Business'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "alert" | "game" | "ingredient" | "product" | "productIngredient" | "provider" | "sale" | "saleProduct" | "saleProductAddition" | "subscription" | "user" | "utils" | "providerMovement" | "business"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductIngredient: {
        payload: Prisma.$ProductIngredientPayload<ExtArgs>
        fields: Prisma.ProductIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>
          }
          findFirst: {
            args: Prisma.ProductIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>
          }
          findMany: {
            args: Prisma.ProductIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>[]
          }
          create: {
            args: Prisma.ProductIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>
          }
          createMany: {
            args: Prisma.ProductIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>[]
          }
          delete: {
            args: Prisma.ProductIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>
          }
          update: {
            args: Prisma.ProductIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>
          }
          deleteMany: {
            args: Prisma.ProductIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIngredientPayload>
          }
          aggregate: {
            args: Prisma.ProductIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductIngredient>
          }
          groupBy: {
            args: Prisma.ProductIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<ProductIngredientCountAggregateOutputType> | number
          }
        }
      }
      Provider: {
        payload: Prisma.$ProviderPayload<ExtArgs>
        fields: Prisma.ProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findFirst: {
            args: Prisma.ProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findMany: {
            args: Prisma.ProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          create: {
            args: Prisma.ProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          createMany: {
            args: Prisma.ProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          delete: {
            args: Prisma.ProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          update: {
            args: Prisma.ProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          aggregate: {
            args: Prisma.ProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvider>
          }
          groupBy: {
            args: Prisma.ProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      SaleProduct: {
        payload: Prisma.$SaleProductPayload<ExtArgs>
        fields: Prisma.SaleProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductPayload>
          }
          findFirst: {
            args: Prisma.SaleProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductPayload>
          }
          findMany: {
            args: Prisma.SaleProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductPayload>[]
          }
          create: {
            args: Prisma.SaleProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductPayload>
          }
          createMany: {
            args: Prisma.SaleProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductPayload>[]
          }
          delete: {
            args: Prisma.SaleProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductPayload>
          }
          update: {
            args: Prisma.SaleProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductPayload>
          }
          deleteMany: {
            args: Prisma.SaleProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SaleProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductPayload>
          }
          aggregate: {
            args: Prisma.SaleProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleProduct>
          }
          groupBy: {
            args: Prisma.SaleProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleProductCountArgs<ExtArgs>
            result: $Utils.Optional<SaleProductCountAggregateOutputType> | number
          }
        }
      }
      SaleProductAddition: {
        payload: Prisma.$SaleProductAdditionPayload<ExtArgs>
        fields: Prisma.SaleProductAdditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleProductAdditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductAdditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleProductAdditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductAdditionPayload>
          }
          findFirst: {
            args: Prisma.SaleProductAdditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductAdditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleProductAdditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductAdditionPayload>
          }
          findMany: {
            args: Prisma.SaleProductAdditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductAdditionPayload>[]
          }
          create: {
            args: Prisma.SaleProductAdditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductAdditionPayload>
          }
          createMany: {
            args: Prisma.SaleProductAdditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleProductAdditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductAdditionPayload>[]
          }
          delete: {
            args: Prisma.SaleProductAdditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductAdditionPayload>
          }
          update: {
            args: Prisma.SaleProductAdditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductAdditionPayload>
          }
          deleteMany: {
            args: Prisma.SaleProductAdditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleProductAdditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SaleProductAdditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleProductAdditionPayload>
          }
          aggregate: {
            args: Prisma.SaleProductAdditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleProductAddition>
          }
          groupBy: {
            args: Prisma.SaleProductAdditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleProductAdditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleProductAdditionCountArgs<ExtArgs>
            result: $Utils.Optional<SaleProductAdditionCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Utils: {
        payload: Prisma.$UtilsPayload<ExtArgs>
        fields: Prisma.UtilsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilsPayload>
          }
          findFirst: {
            args: Prisma.UtilsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilsPayload>
          }
          findMany: {
            args: Prisma.UtilsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilsPayload>[]
          }
          create: {
            args: Prisma.UtilsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilsPayload>
          }
          createMany: {
            args: Prisma.UtilsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilsPayload>[]
          }
          delete: {
            args: Prisma.UtilsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilsPayload>
          }
          update: {
            args: Prisma.UtilsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilsPayload>
          }
          deleteMany: {
            args: Prisma.UtilsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UtilsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilsPayload>
          }
          aggregate: {
            args: Prisma.UtilsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtils>
          }
          groupBy: {
            args: Prisma.UtilsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilsCountArgs<ExtArgs>
            result: $Utils.Optional<UtilsCountAggregateOutputType> | number
          }
        }
      }
      ProviderMovement: {
        payload: Prisma.$ProviderMovementPayload<ExtArgs>
        fields: Prisma.ProviderMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderMovementPayload>
          }
          findFirst: {
            args: Prisma.ProviderMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderMovementPayload>
          }
          findMany: {
            args: Prisma.ProviderMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderMovementPayload>[]
          }
          create: {
            args: Prisma.ProviderMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderMovementPayload>
          }
          createMany: {
            args: Prisma.ProviderMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderMovementPayload>[]
          }
          delete: {
            args: Prisma.ProviderMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderMovementPayload>
          }
          update: {
            args: Prisma.ProviderMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderMovementPayload>
          }
          deleteMany: {
            args: Prisma.ProviderMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProviderMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderMovementPayload>
          }
          aggregate: {
            args: Prisma.ProviderMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderMovement>
          }
          groupBy: {
            args: Prisma.ProviderMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderMovementCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderMovementCountAggregateOutputType> | number
          }
        }
      }
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
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
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    sales: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | GameCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    products: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | IngredientCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductIngredientWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    ingredients: number
    sales: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | ProductCountOutputTypeCountIngredientsArgs
    sales?: boolean | ProductCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductIngredientWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleProductWhereInput
  }


  /**
   * Count Type ProviderCountOutputType
   */

  export type ProviderCountOutputType = {
    ingredients: number
    movements: number
  }

  export type ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | ProviderCountOutputTypeCountIngredientsArgs
    movements?: boolean | ProviderCountOutputTypeCountMovementsArgs
  }

  // Custom InputTypes
  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: ProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderMovementWhereInput
  }


  /**
   * Count Type SaleCountOutputType
   */

  export type SaleCountOutputType = {
    products: number
  }

  export type SaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SaleCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCountOutputType
     */
    select?: SaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleProductWhereInput
  }


  /**
   * Count Type SaleProductCountOutputType
   */

  export type SaleProductCountOutputType = {
    additions: number
  }

  export type SaleProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    additions?: boolean | SaleProductCountOutputTypeCountAdditionsArgs
  }

  // Custom InputTypes
  /**
   * SaleProductCountOutputType without action
   */
  export type SaleProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProductCountOutputType
     */
    select?: SaleProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleProductCountOutputType without action
   */
  export type SaleProductCountOutputTypeCountAdditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleProductAdditionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    id: number | null
    repeatDay: number | null
  }

  export type AlertSumAggregateOutputType = {
    id: number | null
    repeatDay: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    alertTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    repeatDay: number | null
    repeatWeekly: boolean | null
  }

  export type AlertMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    alertTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    repeatDay: number | null
    repeatWeekly: boolean | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    title: number
    description: number
    alertTime: number
    createdAt: number
    updatedAt: number
    repeatDay: number
    repeatWeekly: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    id?: true
    repeatDay?: true
  }

  export type AlertSumAggregateInputType = {
    id?: true
    repeatDay?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    alertTime?: true
    createdAt?: true
    updatedAt?: true
    repeatDay?: true
    repeatWeekly?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    alertTime?: true
    createdAt?: true
    updatedAt?: true
    repeatDay?: true
    repeatWeekly?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    alertTime?: true
    createdAt?: true
    updatedAt?: true
    repeatDay?: true
    repeatWeekly?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: number
    title: string
    description: string
    alertTime: Date
    createdAt: Date
    updatedAt: Date
    repeatDay: number | null
    repeatWeekly: boolean
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    alertTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    repeatDay?: boolean
    repeatWeekly?: boolean
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    alertTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    repeatDay?: boolean
    repeatWeekly?: boolean
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    alertTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    repeatDay?: boolean
    repeatWeekly?: boolean
  }


  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      alertTime: Date
      createdAt: Date
      updatedAt: Date
      repeatDay: number | null
      repeatWeekly: boolean
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
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
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Alert model
   */ 
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'Int'>
    readonly title: FieldRef<"Alert", 'String'>
    readonly description: FieldRef<"Alert", 'String'>
    readonly alertTime: FieldRef<"Alert", 'DateTime'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly updatedAt: FieldRef<"Alert", 'DateTime'>
    readonly repeatDay: FieldRef<"Alert", 'Int'>
    readonly repeatWeekly: FieldRef<"Alert", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    name: string
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sales?: boolean | Game$salesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Game$salesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends Game$salesArgs<ExtArgs> = {}>(args?: Subset<T, Game$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Game model
   */ 
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'Int'>
    readonly name: FieldRef<"Game", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
  }

  /**
   * Game.sales
   */
  export type Game$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    id: number | null
    price: number | null
    quantity: number | null
    providerId: number | null
  }

  export type IngredientSumAggregateOutputType = {
    id: number | null
    price: number | null
    quantity: number | null
    providerId: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    quantity: number | null
    typeUnity: string | null
    createdAt: Date | null
    updatedAt: Date | null
    Origin: string | null
    providerId: number | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    quantity: number | null
    typeUnity: string | null
    createdAt: Date | null
    updatedAt: Date | null
    Origin: string | null
    providerId: number | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    quantity: number
    typeUnity: number
    createdAt: number
    updatedAt: number
    Origin: number
    providerId: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    providerId?: true
  }

  export type IngredientSumAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    providerId?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    typeUnity?: true
    createdAt?: true
    updatedAt?: true
    Origin?: true
    providerId?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    typeUnity?: true
    createdAt?: true
    updatedAt?: true
    Origin?: true
    providerId?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    typeUnity?: true
    createdAt?: true
    updatedAt?: true
    Origin?: true
    providerId?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: number
    name: string
    description: string | null
    price: number
    quantity: number | null
    typeUnity: string
    createdAt: Date
    updatedAt: Date
    Origin: string
    providerId: number | null
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    typeUnity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Origin?: boolean
    providerId?: boolean
    provider?: boolean | Ingredient$providerArgs<ExtArgs>
    products?: boolean | Ingredient$productsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    typeUnity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Origin?: boolean
    providerId?: boolean
    provider?: boolean | Ingredient$providerArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    typeUnity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Origin?: boolean
    providerId?: boolean
  }

  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | Ingredient$providerArgs<ExtArgs>
    products?: boolean | Ingredient$productsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | Ingredient$providerArgs<ExtArgs>
  }

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs> | null
      products: Prisma.$ProductIngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      price: number
      quantity: number | null
      typeUnity: string
      createdAt: Date
      updatedAt: Date
      Origin: string
      providerId: number | null
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
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
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends Ingredient$providerArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$providerArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    products<T extends Ingredient$productsArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Ingredient model
   */ 
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'Int'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly description: FieldRef<"Ingredient", 'String'>
    readonly price: FieldRef<"Ingredient", 'Int'>
    readonly quantity: FieldRef<"Ingredient", 'Float'>
    readonly typeUnity: FieldRef<"Ingredient", 'String'>
    readonly createdAt: FieldRef<"Ingredient", 'DateTime'>
    readonly updatedAt: FieldRef<"Ingredient", 'DateTime'>
    readonly Origin: FieldRef<"Ingredient", 'String'>
    readonly providerId: FieldRef<"Ingredient", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
  }

  /**
   * Ingredient.provider
   */
  export type Ingredient$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    where?: ProviderWhereInput
  }

  /**
   * Ingredient.products
   */
  export type Ingredient$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIngredientInclude<ExtArgs> | null
    where?: ProductIngredientWhereInput
    orderBy?: ProductIngredientOrderByWithRelationInput | ProductIngredientOrderByWithRelationInput[]
    cursor?: ProductIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductIngredientScalarFieldEnum | ProductIngredientScalarFieldEnum[]
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    quantity: number | null
    rappi_price: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    quantity: number | null
    rappi_price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    quantity: number | null
    typeUnity: string | null
    barcode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    category: string | null
    rappi_price: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    quantity: number | null
    typeUnity: string | null
    barcode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    category: string | null
    rappi_price: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    quantity: number
    typeUnity: number
    barcode: number
    createdAt: number
    updatedAt: number
    category: number
    rappi_price: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    rappi_price?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    rappi_price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    typeUnity?: true
    barcode?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    rappi_price?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    typeUnity?: true
    barcode?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    rappi_price?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    typeUnity?: true
    barcode?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    rappi_price?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    description: string | null
    price: number
    quantity: number | null
    typeUnity: string | null
    barcode: string | null
    createdAt: Date
    updatedAt: Date
    category: string
    rappi_price: number | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    typeUnity?: boolean
    barcode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    rappi_price?: boolean
    ingredients?: boolean | Product$ingredientsArgs<ExtArgs>
    sales?: boolean | Product$salesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    typeUnity?: boolean
    barcode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    rappi_price?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    typeUnity?: boolean
    barcode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    rappi_price?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Product$ingredientsArgs<ExtArgs>
    sales?: boolean | Product$salesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      ingredients: Prisma.$ProductIngredientPayload<ExtArgs>[]
      sales: Prisma.$SaleProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      price: number
      quantity: number | null
      typeUnity: string | null
      barcode: string | null
      createdAt: Date
      updatedAt: Date
      category: string
      rappi_price: number | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends Product$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Product$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "findMany"> | Null>
    sales<T extends Product$salesArgs<ExtArgs> = {}>(args?: Subset<T, Product$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleProductPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly quantity: FieldRef<"Product", 'Float'>
    readonly typeUnity: FieldRef<"Product", 'String'>
    readonly barcode: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly category: FieldRef<"Product", 'String'>
    readonly rappi_price: FieldRef<"Product", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.ingredients
   */
  export type Product$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIngredientInclude<ExtArgs> | null
    where?: ProductIngredientWhereInput
    orderBy?: ProductIngredientOrderByWithRelationInput | ProductIngredientOrderByWithRelationInput[]
    cursor?: ProductIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductIngredientScalarFieldEnum | ProductIngredientScalarFieldEnum[]
  }

  /**
   * Product.sales
   */
  export type Product$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProduct
     */
    select?: SaleProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductInclude<ExtArgs> | null
    where?: SaleProductWhereInput
    orderBy?: SaleProductOrderByWithRelationInput | SaleProductOrderByWithRelationInput[]
    cursor?: SaleProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleProductScalarFieldEnum | SaleProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductIngredient
   */

  export type AggregateProductIngredient = {
    _count: ProductIngredientCountAggregateOutputType | null
    _avg: ProductIngredientAvgAggregateOutputType | null
    _sum: ProductIngredientSumAggregateOutputType | null
    _min: ProductIngredientMinAggregateOutputType | null
    _max: ProductIngredientMaxAggregateOutputType | null
  }

  export type ProductIngredientAvgAggregateOutputType = {
    productId: number | null
    ingredientId: number | null
    quantity: number | null
  }

  export type ProductIngredientSumAggregateOutputType = {
    productId: number | null
    ingredientId: number | null
    quantity: number | null
  }

  export type ProductIngredientMinAggregateOutputType = {
    productId: number | null
    ingredientId: number | null
    quantity: number | null
    createdAt: Date | null
  }

  export type ProductIngredientMaxAggregateOutputType = {
    productId: number | null
    ingredientId: number | null
    quantity: number | null
    createdAt: Date | null
  }

  export type ProductIngredientCountAggregateOutputType = {
    productId: number
    ingredientId: number
    quantity: number
    createdAt: number
    _all: number
  }


  export type ProductIngredientAvgAggregateInputType = {
    productId?: true
    ingredientId?: true
    quantity?: true
  }

  export type ProductIngredientSumAggregateInputType = {
    productId?: true
    ingredientId?: true
    quantity?: true
  }

  export type ProductIngredientMinAggregateInputType = {
    productId?: true
    ingredientId?: true
    quantity?: true
    createdAt?: true
  }

  export type ProductIngredientMaxAggregateInputType = {
    productId?: true
    ingredientId?: true
    quantity?: true
    createdAt?: true
  }

  export type ProductIngredientCountAggregateInputType = {
    productId?: true
    ingredientId?: true
    quantity?: true
    createdAt?: true
    _all?: true
  }

  export type ProductIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductIngredient to aggregate.
     */
    where?: ProductIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductIngredients to fetch.
     */
    orderBy?: ProductIngredientOrderByWithRelationInput | ProductIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductIngredients
    **/
    _count?: true | ProductIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductIngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductIngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductIngredientMaxAggregateInputType
  }

  export type GetProductIngredientAggregateType<T extends ProductIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateProductIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductIngredient[P]>
      : GetScalarType<T[P], AggregateProductIngredient[P]>
  }




  export type ProductIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductIngredientWhereInput
    orderBy?: ProductIngredientOrderByWithAggregationInput | ProductIngredientOrderByWithAggregationInput[]
    by: ProductIngredientScalarFieldEnum[] | ProductIngredientScalarFieldEnum
    having?: ProductIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductIngredientCountAggregateInputType | true
    _avg?: ProductIngredientAvgAggregateInputType
    _sum?: ProductIngredientSumAggregateInputType
    _min?: ProductIngredientMinAggregateInputType
    _max?: ProductIngredientMaxAggregateInputType
  }

  export type ProductIngredientGroupByOutputType = {
    productId: number
    ingredientId: number
    quantity: number
    createdAt: Date
    _count: ProductIngredientCountAggregateOutputType | null
    _avg: ProductIngredientAvgAggregateOutputType | null
    _sum: ProductIngredientSumAggregateOutputType | null
    _min: ProductIngredientMinAggregateOutputType | null
    _max: ProductIngredientMaxAggregateOutputType | null
  }

  type GetProductIngredientGroupByPayload<T extends ProductIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], ProductIngredientGroupByOutputType[P]>
        }
      >
    >


  export type ProductIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    createdAt?: boolean
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productIngredient"]>

  export type ProductIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    createdAt?: boolean
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productIngredient"]>

  export type ProductIngredientSelectScalar = {
    productId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    createdAt?: boolean
  }

  export type ProductIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductIngredient"
    objects: {
      ingredient: Prisma.$IngredientPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      ingredientId: number
      quantity: number
      createdAt: Date
    }, ExtArgs["result"]["productIngredient"]>
    composites: {}
  }

  type ProductIngredientGetPayload<S extends boolean | null | undefined | ProductIngredientDefaultArgs> = $Result.GetResult<Prisma.$ProductIngredientPayload, S>

  type ProductIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductIngredientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductIngredientCountAggregateInputType | true
    }

  export interface ProductIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductIngredient'], meta: { name: 'ProductIngredient' } }
    /**
     * Find zero or one ProductIngredient that matches the filter.
     * @param {ProductIngredientFindUniqueArgs} args - Arguments to find a ProductIngredient
     * @example
     * // Get one ProductIngredient
     * const productIngredient = await prisma.productIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductIngredientFindUniqueArgs>(args: SelectSubset<T, ProductIngredientFindUniqueArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductIngredient that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductIngredientFindUniqueOrThrowArgs} args - Arguments to find a ProductIngredient
     * @example
     * // Get one ProductIngredient
     * const productIngredient = await prisma.productIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientFindFirstArgs} args - Arguments to find a ProductIngredient
     * @example
     * // Get one ProductIngredient
     * const productIngredient = await prisma.productIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductIngredientFindFirstArgs>(args?: SelectSubset<T, ProductIngredientFindFirstArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientFindFirstOrThrowArgs} args - Arguments to find a ProductIngredient
     * @example
     * // Get one ProductIngredient
     * const productIngredient = await prisma.productIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductIngredients
     * const productIngredients = await prisma.productIngredient.findMany()
     * 
     * // Get first 10 ProductIngredients
     * const productIngredients = await prisma.productIngredient.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productIngredientWithProductIdOnly = await prisma.productIngredient.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductIngredientFindManyArgs>(args?: SelectSubset<T, ProductIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductIngredient.
     * @param {ProductIngredientCreateArgs} args - Arguments to create a ProductIngredient.
     * @example
     * // Create one ProductIngredient
     * const ProductIngredient = await prisma.productIngredient.create({
     *   data: {
     *     // ... data to create a ProductIngredient
     *   }
     * })
     * 
     */
    create<T extends ProductIngredientCreateArgs>(args: SelectSubset<T, ProductIngredientCreateArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductIngredients.
     * @param {ProductIngredientCreateManyArgs} args - Arguments to create many ProductIngredients.
     * @example
     * // Create many ProductIngredients
     * const productIngredient = await prisma.productIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductIngredientCreateManyArgs>(args?: SelectSubset<T, ProductIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductIngredients and returns the data saved in the database.
     * @param {ProductIngredientCreateManyAndReturnArgs} args - Arguments to create many ProductIngredients.
     * @example
     * // Create many ProductIngredients
     * const productIngredient = await prisma.productIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductIngredients and only return the `productId`
     * const productIngredientWithProductIdOnly = await prisma.productIngredient.createManyAndReturn({ 
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductIngredient.
     * @param {ProductIngredientDeleteArgs} args - Arguments to delete one ProductIngredient.
     * @example
     * // Delete one ProductIngredient
     * const ProductIngredient = await prisma.productIngredient.delete({
     *   where: {
     *     // ... filter to delete one ProductIngredient
     *   }
     * })
     * 
     */
    delete<T extends ProductIngredientDeleteArgs>(args: SelectSubset<T, ProductIngredientDeleteArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductIngredient.
     * @param {ProductIngredientUpdateArgs} args - Arguments to update one ProductIngredient.
     * @example
     * // Update one ProductIngredient
     * const productIngredient = await prisma.productIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductIngredientUpdateArgs>(args: SelectSubset<T, ProductIngredientUpdateArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductIngredients.
     * @param {ProductIngredientDeleteManyArgs} args - Arguments to filter ProductIngredients to delete.
     * @example
     * // Delete a few ProductIngredients
     * const { count } = await prisma.productIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductIngredientDeleteManyArgs>(args?: SelectSubset<T, ProductIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductIngredients
     * const productIngredient = await prisma.productIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductIngredientUpdateManyArgs>(args: SelectSubset<T, ProductIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductIngredient.
     * @param {ProductIngredientUpsertArgs} args - Arguments to update or create a ProductIngredient.
     * @example
     * // Update or create a ProductIngredient
     * const productIngredient = await prisma.productIngredient.upsert({
     *   create: {
     *     // ... data to create a ProductIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductIngredient we want to update
     *   }
     * })
     */
    upsert<T extends ProductIngredientUpsertArgs>(args: SelectSubset<T, ProductIngredientUpsertArgs<ExtArgs>>): Prisma__ProductIngredientClient<$Result.GetResult<Prisma.$ProductIngredientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientCountArgs} args - Arguments to filter ProductIngredients to count.
     * @example
     * // Count the number of ProductIngredients
     * const count = await prisma.productIngredient.count({
     *   where: {
     *     // ... the filter for the ProductIngredients we want to count
     *   }
     * })
    **/
    count<T extends ProductIngredientCountArgs>(
      args?: Subset<T, ProductIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductIngredientAggregateArgs>(args: Subset<T, ProductIngredientAggregateArgs>): Prisma.PrismaPromise<GetProductIngredientAggregateType<T>>

    /**
     * Group by ProductIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIngredientGroupByArgs} args - Group by arguments.
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
      T extends ProductIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductIngredientGroupByArgs['orderBy'] }
        : { orderBy?: ProductIngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductIngredient model
   */
  readonly fields: ProductIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProductIngredient model
   */ 
  interface ProductIngredientFieldRefs {
    readonly productId: FieldRef<"ProductIngredient", 'Int'>
    readonly ingredientId: FieldRef<"ProductIngredient", 'Int'>
    readonly quantity: FieldRef<"ProductIngredient", 'Int'>
    readonly createdAt: FieldRef<"ProductIngredient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductIngredient findUnique
   */
  export type ProductIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIngredientInclude<ExtArgs> | null
    /**
     * Filter, which ProductIngredient to fetch.
     */
    where: ProductIngredientWhereUniqueInput
  }

  /**
   * ProductIngredient findUniqueOrThrow
   */
  export type ProductIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIngredientInclude<ExtArgs> | null
    /**
     * Filter, which ProductIngredient to fetch.
     */
    where: ProductIngredientWhereUniqueInput
  }

  /**
   * ProductIngredient findFirst
   */
  export type ProductIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIngredientInclude<ExtArgs> | null
    /**
     * Filter, which ProductIngredient to fetch.
     */
    where?: ProductIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductIngredients to fetch.
     */
    orderBy?: ProductIngredientOrderByWithRelationInput | ProductIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductIngredients.
     */
    cursor?: ProductIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductIngredients.
     */
    distinct?: ProductIngredientScalarFieldEnum | ProductIngredientScalarFieldEnum[]
  }

  /**
   * ProductIngredient findFirstOrThrow
   */
  export type ProductIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIngredientInclude<ExtArgs> | null
    /**
     * Filter, which ProductIngredient to fetch.
     */
    where?: ProductIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductIngredients to fetch.
     */
    orderBy?: ProductIngredientOrderByWithRelationInput | ProductIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductIngredients.
     */
    cursor?: ProductIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductIngredients.
     */
    distinct?: ProductIngredientScalarFieldEnum | ProductIngredientScalarFieldEnum[]
  }

  /**
   * ProductIngredient findMany
   */
  export type ProductIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIngredientInclude<ExtArgs> | null
    /**
     * Filter, which ProductIngredients to fetch.
     */
    where?: ProductIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductIngredients to fetch.
     */
    orderBy?: ProductIngredientOrderByWithRelationInput | ProductIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductIngredients.
     */
    cursor?: ProductIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductIngredients.
     */
    skip?: number
    distinct?: ProductIngredientScalarFieldEnum | ProductIngredientScalarFieldEnum[]
  }

  /**
   * ProductIngredient create
   */
  export type ProductIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductIngredient.
     */
    data: XOR<ProductIngredientCreateInput, ProductIngredientUncheckedCreateInput>
  }

  /**
   * ProductIngredient createMany
   */
  export type ProductIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductIngredients.
     */
    data: ProductIngredientCreateManyInput | ProductIngredientCreateManyInput[]
  }

  /**
   * ProductIngredient createManyAndReturn
   */
  export type ProductIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductIngredients.
     */
    data: ProductIngredientCreateManyInput | ProductIngredientCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductIngredient update
   */
  export type ProductIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductIngredient.
     */
    data: XOR<ProductIngredientUpdateInput, ProductIngredientUncheckedUpdateInput>
    /**
     * Choose, which ProductIngredient to update.
     */
    where: ProductIngredientWhereUniqueInput
  }

  /**
   * ProductIngredient updateMany
   */
  export type ProductIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductIngredients.
     */
    data: XOR<ProductIngredientUpdateManyMutationInput, ProductIngredientUncheckedUpdateManyInput>
    /**
     * Filter which ProductIngredients to update
     */
    where?: ProductIngredientWhereInput
  }

  /**
   * ProductIngredient upsert
   */
  export type ProductIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductIngredient to update in case it exists.
     */
    where: ProductIngredientWhereUniqueInput
    /**
     * In case the ProductIngredient found by the `where` argument doesn't exist, create a new ProductIngredient with this data.
     */
    create: XOR<ProductIngredientCreateInput, ProductIngredientUncheckedCreateInput>
    /**
     * In case the ProductIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductIngredientUpdateInput, ProductIngredientUncheckedUpdateInput>
  }

  /**
   * ProductIngredient delete
   */
  export type ProductIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIngredientInclude<ExtArgs> | null
    /**
     * Filter which ProductIngredient to delete.
     */
    where: ProductIngredientWhereUniqueInput
  }

  /**
   * ProductIngredient deleteMany
   */
  export type ProductIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductIngredients to delete
     */
    where?: ProductIngredientWhereInput
  }

  /**
   * ProductIngredient without action
   */
  export type ProductIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIngredientInclude<ExtArgs> | null
  }


  /**
   * Model Provider
   */

  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _avg: ProviderAvgAggregateOutputType | null
    _sum: ProviderSumAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderAvgAggregateOutputType = {
    id: number | null
  }

  export type ProviderSumAggregateOutputType = {
    id: number | null
  }

  export type ProviderMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    accountNumber: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    accountNumber: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderCountAggregateOutputType = {
    id: number
    name: number
    description: number
    accountNumber: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderAvgAggregateInputType = {
    id?: true
  }

  export type ProviderSumAggregateInputType = {
    id?: true
  }

  export type ProviderMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    accountNumber?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    accountNumber?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    accountNumber?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provider to aggregate.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWhereInput
    orderBy?: ProviderOrderByWithAggregationInput | ProviderOrderByWithAggregationInput[]
    by: ProviderScalarFieldEnum[] | ProviderScalarFieldEnum
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _avg?: ProviderAvgAggregateInputType
    _sum?: ProviderSumAggregateInputType
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }

  export type ProviderGroupByOutputType = {
    id: number
    name: string
    description: string | null
    accountNumber: string
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProviderCountAggregateOutputType | null
    _avg: ProviderAvgAggregateOutputType | null
    _sum: ProviderSumAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    accountNumber?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ingredients?: boolean | Provider$ingredientsArgs<ExtArgs>
    movements?: boolean | Provider$movementsArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    accountNumber?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    accountNumber?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Provider$ingredientsArgs<ExtArgs>
    movements?: boolean | Provider$movementsArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provider"
    objects: {
      ingredients: Prisma.$IngredientPayload<ExtArgs>[]
      movements: Prisma.$ProviderMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      accountNumber: string
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["provider"]>
    composites: {}
  }

  type ProviderGetPayload<S extends boolean | null | undefined | ProviderDefaultArgs> = $Result.GetResult<Prisma.$ProviderPayload, S>

  type ProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProviderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProviderCountAggregateInputType | true
    }

  export interface ProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provider'], meta: { name: 'Provider' } }
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderFindUniqueArgs>(args: SelectSubset<T, ProviderFindUniqueArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Provider that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderFindFirstArgs>(args?: SelectSubset<T, ProviderFindFirstArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderFindManyArgs>(args?: SelectSubset<T, ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
     */
    create<T extends ProviderCreateArgs>(args: SelectSubset<T, ProviderCreateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Providers.
     * @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderCreateManyArgs>(args?: SelectSubset<T, ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProviderCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
     */
    delete<T extends ProviderDeleteArgs>(args: SelectSubset<T, ProviderDeleteArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderUpdateArgs>(args: SelectSubset<T, ProviderUpdateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDeleteManyArgs>(args?: SelectSubset<T, ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderUpdateManyArgs>(args: SelectSubset<T, ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     */
    upsert<T extends ProviderUpsertArgs>(args: SelectSubset<T, ProviderUpsertArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): Prisma.PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
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
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provider model
   */
  readonly fields: ProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends Provider$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany"> | Null>
    movements<T extends Provider$movementsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderMovementPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Provider model
   */ 
  interface ProviderFieldRefs {
    readonly id: FieldRef<"Provider", 'Int'>
    readonly name: FieldRef<"Provider", 'String'>
    readonly description: FieldRef<"Provider", 'String'>
    readonly accountNumber: FieldRef<"Provider", 'String'>
    readonly phone: FieldRef<"Provider", 'String'>
    readonly createdAt: FieldRef<"Provider", 'DateTime'>
    readonly updatedAt: FieldRef<"Provider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Provider findUnique
   */
  export type ProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findUniqueOrThrow
   */
  export type ProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findFirst
   */
  export type ProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findFirstOrThrow
   */
  export type ProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider create
   */
  export type ProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a Provider.
     */
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }

  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
  }

  /**
   * Provider createManyAndReturn
   */
  export type ProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
  }

  /**
   * Provider update
   */
  export type ProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a Provider.
     */
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
  }

  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the Provider to update in case it exists.
     */
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     */
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }

  /**
   * Provider delete
   */
  export type ProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter which Provider to delete.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: ProviderWhereInput
  }

  /**
   * Provider.ingredients
   */
  export type Provider$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    cursor?: IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Provider.movements
   */
  export type Provider$movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderMovement
     */
    select?: ProviderMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderMovementInclude<ExtArgs> | null
    where?: ProviderMovementWhereInput
    orderBy?: ProviderMovementOrderByWithRelationInput | ProviderMovementOrderByWithRelationInput[]
    cursor?: ProviderMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderMovementScalarFieldEnum | ProviderMovementScalarFieldEnum[]
  }

  /**
   * Provider without action
   */
  export type ProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    id: number | null
    totalAmount: number | null
    gameId: number | null
    cashAmount: number | null
    discountPercent: number | null
  }

  export type SaleSumAggregateOutputType = {
    id: number | null
    totalAmount: number | null
    gameId: number | null
    cashAmount: number | null
    discountPercent: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: number | null
    totalAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    table: string | null
    generalObservation: string | null
    gameId: number | null
    orderType: string | null
    user: string | null
    paymentType: string | null
    cashAmount: number | null
    discountPercent: number | null
  }

  export type SaleMaxAggregateOutputType = {
    id: number | null
    totalAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    table: string | null
    generalObservation: string | null
    gameId: number | null
    orderType: string | null
    user: string | null
    paymentType: string | null
    cashAmount: number | null
    discountPercent: number | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    totalAmount: number
    createdAt: number
    updatedAt: number
    status: number
    table: number
    generalObservation: number
    gameId: number
    orderType: number
    user: number
    paymentType: number
    cashAmount: number
    discountPercent: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    id?: true
    totalAmount?: true
    gameId?: true
    cashAmount?: true
    discountPercent?: true
  }

  export type SaleSumAggregateInputType = {
    id?: true
    totalAmount?: true
    gameId?: true
    cashAmount?: true
    discountPercent?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    table?: true
    generalObservation?: true
    gameId?: true
    orderType?: true
    user?: true
    paymentType?: true
    cashAmount?: true
    discountPercent?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    table?: true
    generalObservation?: true
    gameId?: true
    orderType?: true
    user?: true
    paymentType?: true
    cashAmount?: true
    discountPercent?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    table?: true
    generalObservation?: true
    gameId?: true
    orderType?: true
    user?: true
    paymentType?: true
    cashAmount?: true
    discountPercent?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: number
    totalAmount: number
    createdAt: Date
    updatedAt: Date
    status: string
    table: string
    generalObservation: string | null
    gameId: number | null
    orderType: string
    user: string
    paymentType: string | null
    cashAmount: number | null
    discountPercent: number | null
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    table?: boolean
    generalObservation?: boolean
    gameId?: boolean
    orderType?: boolean
    user?: boolean
    paymentType?: boolean
    cashAmount?: boolean
    discountPercent?: boolean
    game?: boolean | Sale$gameArgs<ExtArgs>
    products?: boolean | Sale$productsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    table?: boolean
    generalObservation?: boolean
    gameId?: boolean
    orderType?: boolean
    user?: boolean
    paymentType?: boolean
    cashAmount?: boolean
    discountPercent?: boolean
    game?: boolean | Sale$gameArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    table?: boolean
    generalObservation?: boolean
    gameId?: boolean
    orderType?: boolean
    user?: boolean
    paymentType?: boolean
    cashAmount?: boolean
    discountPercent?: boolean
  }

  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | Sale$gameArgs<ExtArgs>
    products?: boolean | Sale$productsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | Sale$gameArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      game: Prisma.$GamePayload<ExtArgs> | null
      products: Prisma.$SaleProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      totalAmount: number
      createdAt: Date
      updatedAt: Date
      status: string
      table: string
      generalObservation: string | null
      gameId: number | null
      orderType: string
      user: string
      paymentType: string | null
      cashAmount: number | null
      discountPercent: number | null
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
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
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends Sale$gameArgs<ExtArgs> = {}>(args?: Subset<T, Sale$gameArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    products<T extends Sale$productsArgs<ExtArgs> = {}>(args?: Subset<T, Sale$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleProductPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Sale model
   */ 
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'Int'>
    readonly totalAmount: FieldRef<"Sale", 'Float'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
    readonly updatedAt: FieldRef<"Sale", 'DateTime'>
    readonly status: FieldRef<"Sale", 'String'>
    readonly table: FieldRef<"Sale", 'String'>
    readonly generalObservation: FieldRef<"Sale", 'String'>
    readonly gameId: FieldRef<"Sale", 'Int'>
    readonly orderType: FieldRef<"Sale", 'String'>
    readonly user: FieldRef<"Sale", 'String'>
    readonly paymentType: FieldRef<"Sale", 'String'>
    readonly cashAmount: FieldRef<"Sale", 'Float'>
    readonly discountPercent: FieldRef<"Sale", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
  }

  /**
   * Sale.game
   */
  export type Sale$gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
  }

  /**
   * Sale.products
   */
  export type Sale$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProduct
     */
    select?: SaleProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductInclude<ExtArgs> | null
    where?: SaleProductWhereInput
    orderBy?: SaleProductOrderByWithRelationInput | SaleProductOrderByWithRelationInput[]
    cursor?: SaleProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleProductScalarFieldEnum | SaleProductScalarFieldEnum[]
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model SaleProduct
   */

  export type AggregateSaleProduct = {
    _count: SaleProductCountAggregateOutputType | null
    _avg: SaleProductAvgAggregateOutputType | null
    _sum: SaleProductSumAggregateOutputType | null
    _min: SaleProductMinAggregateOutputType | null
    _max: SaleProductMaxAggregateOutputType | null
  }

  export type SaleProductAvgAggregateOutputType = {
    saleId: number | null
    productId: number | null
    quantity: number | null
  }

  export type SaleProductSumAggregateOutputType = {
    saleId: number | null
    productId: number | null
    quantity: number | null
  }

  export type SaleProductMinAggregateOutputType = {
    id: string | null
    saleId: number | null
    productId: number | null
    quantity: number | null
    observation: string | null
  }

  export type SaleProductMaxAggregateOutputType = {
    id: string | null
    saleId: number | null
    productId: number | null
    quantity: number | null
    observation: string | null
  }

  export type SaleProductCountAggregateOutputType = {
    id: number
    saleId: number
    productId: number
    quantity: number
    observation: number
    _all: number
  }


  export type SaleProductAvgAggregateInputType = {
    saleId?: true
    productId?: true
    quantity?: true
  }

  export type SaleProductSumAggregateInputType = {
    saleId?: true
    productId?: true
    quantity?: true
  }

  export type SaleProductMinAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    observation?: true
  }

  export type SaleProductMaxAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    observation?: true
  }

  export type SaleProductCountAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    observation?: true
    _all?: true
  }

  export type SaleProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleProduct to aggregate.
     */
    where?: SaleProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleProducts to fetch.
     */
    orderBy?: SaleProductOrderByWithRelationInput | SaleProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleProducts
    **/
    _count?: true | SaleProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleProductMaxAggregateInputType
  }

  export type GetSaleProductAggregateType<T extends SaleProductAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleProduct[P]>
      : GetScalarType<T[P], AggregateSaleProduct[P]>
  }




  export type SaleProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleProductWhereInput
    orderBy?: SaleProductOrderByWithAggregationInput | SaleProductOrderByWithAggregationInput[]
    by: SaleProductScalarFieldEnum[] | SaleProductScalarFieldEnum
    having?: SaleProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleProductCountAggregateInputType | true
    _avg?: SaleProductAvgAggregateInputType
    _sum?: SaleProductSumAggregateInputType
    _min?: SaleProductMinAggregateInputType
    _max?: SaleProductMaxAggregateInputType
  }

  export type SaleProductGroupByOutputType = {
    id: string
    saleId: number
    productId: number
    quantity: number
    observation: string | null
    _count: SaleProductCountAggregateOutputType | null
    _avg: SaleProductAvgAggregateOutputType | null
    _sum: SaleProductSumAggregateOutputType | null
    _min: SaleProductMinAggregateOutputType | null
    _max: SaleProductMaxAggregateOutputType | null
  }

  type GetSaleProductGroupByPayload<T extends SaleProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleProductGroupByOutputType[P]>
            : GetScalarType<T[P], SaleProductGroupByOutputType[P]>
        }
      >
    >


  export type SaleProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    observation?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    additions?: boolean | SaleProduct$additionsArgs<ExtArgs>
    _count?: boolean | SaleProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleProduct"]>

  export type SaleProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    observation?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleProduct"]>

  export type SaleProductSelectScalar = {
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    observation?: boolean
  }

  export type SaleProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    additions?: boolean | SaleProduct$additionsArgs<ExtArgs>
    _count?: boolean | SaleProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }

  export type $SaleProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleProduct"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      sale: Prisma.$SalePayload<ExtArgs>
      additions: Prisma.$SaleProductAdditionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      saleId: number
      productId: number
      quantity: number
      observation: string | null
    }, ExtArgs["result"]["saleProduct"]>
    composites: {}
  }

  type SaleProductGetPayload<S extends boolean | null | undefined | SaleProductDefaultArgs> = $Result.GetResult<Prisma.$SaleProductPayload, S>

  type SaleProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SaleProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SaleProductCountAggregateInputType | true
    }

  export interface SaleProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleProduct'], meta: { name: 'SaleProduct' } }
    /**
     * Find zero or one SaleProduct that matches the filter.
     * @param {SaleProductFindUniqueArgs} args - Arguments to find a SaleProduct
     * @example
     * // Get one SaleProduct
     * const saleProduct = await prisma.saleProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleProductFindUniqueArgs>(args: SelectSubset<T, SaleProductFindUniqueArgs<ExtArgs>>): Prisma__SaleProductClient<$Result.GetResult<Prisma.$SaleProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SaleProduct that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SaleProductFindUniqueOrThrowArgs} args - Arguments to find a SaleProduct
     * @example
     * // Get one SaleProduct
     * const saleProduct = await prisma.saleProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleProductFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleProductClient<$Result.GetResult<Prisma.$SaleProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SaleProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductFindFirstArgs} args - Arguments to find a SaleProduct
     * @example
     * // Get one SaleProduct
     * const saleProduct = await prisma.saleProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleProductFindFirstArgs>(args?: SelectSubset<T, SaleProductFindFirstArgs<ExtArgs>>): Prisma__SaleProductClient<$Result.GetResult<Prisma.$SaleProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SaleProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductFindFirstOrThrowArgs} args - Arguments to find a SaleProduct
     * @example
     * // Get one SaleProduct
     * const saleProduct = await prisma.saleProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleProductFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleProductClient<$Result.GetResult<Prisma.$SaleProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SaleProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleProducts
     * const saleProducts = await prisma.saleProduct.findMany()
     * 
     * // Get first 10 SaleProducts
     * const saleProducts = await prisma.saleProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleProductWithIdOnly = await prisma.saleProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleProductFindManyArgs>(args?: SelectSubset<T, SaleProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SaleProduct.
     * @param {SaleProductCreateArgs} args - Arguments to create a SaleProduct.
     * @example
     * // Create one SaleProduct
     * const SaleProduct = await prisma.saleProduct.create({
     *   data: {
     *     // ... data to create a SaleProduct
     *   }
     * })
     * 
     */
    create<T extends SaleProductCreateArgs>(args: SelectSubset<T, SaleProductCreateArgs<ExtArgs>>): Prisma__SaleProductClient<$Result.GetResult<Prisma.$SaleProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SaleProducts.
     * @param {SaleProductCreateManyArgs} args - Arguments to create many SaleProducts.
     * @example
     * // Create many SaleProducts
     * const saleProduct = await prisma.saleProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleProductCreateManyArgs>(args?: SelectSubset<T, SaleProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleProducts and returns the data saved in the database.
     * @param {SaleProductCreateManyAndReturnArgs} args - Arguments to create many SaleProducts.
     * @example
     * // Create many SaleProducts
     * const saleProduct = await prisma.saleProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleProducts and only return the `id`
     * const saleProductWithIdOnly = await prisma.saleProduct.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleProductCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SaleProduct.
     * @param {SaleProductDeleteArgs} args - Arguments to delete one SaleProduct.
     * @example
     * // Delete one SaleProduct
     * const SaleProduct = await prisma.saleProduct.delete({
     *   where: {
     *     // ... filter to delete one SaleProduct
     *   }
     * })
     * 
     */
    delete<T extends SaleProductDeleteArgs>(args: SelectSubset<T, SaleProductDeleteArgs<ExtArgs>>): Prisma__SaleProductClient<$Result.GetResult<Prisma.$SaleProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SaleProduct.
     * @param {SaleProductUpdateArgs} args - Arguments to update one SaleProduct.
     * @example
     * // Update one SaleProduct
     * const saleProduct = await prisma.saleProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleProductUpdateArgs>(args: SelectSubset<T, SaleProductUpdateArgs<ExtArgs>>): Prisma__SaleProductClient<$Result.GetResult<Prisma.$SaleProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SaleProducts.
     * @param {SaleProductDeleteManyArgs} args - Arguments to filter SaleProducts to delete.
     * @example
     * // Delete a few SaleProducts
     * const { count } = await prisma.saleProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleProductDeleteManyArgs>(args?: SelectSubset<T, SaleProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleProducts
     * const saleProduct = await prisma.saleProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleProductUpdateManyArgs>(args: SelectSubset<T, SaleProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SaleProduct.
     * @param {SaleProductUpsertArgs} args - Arguments to update or create a SaleProduct.
     * @example
     * // Update or create a SaleProduct
     * const saleProduct = await prisma.saleProduct.upsert({
     *   create: {
     *     // ... data to create a SaleProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleProduct we want to update
     *   }
     * })
     */
    upsert<T extends SaleProductUpsertArgs>(args: SelectSubset<T, SaleProductUpsertArgs<ExtArgs>>): Prisma__SaleProductClient<$Result.GetResult<Prisma.$SaleProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SaleProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductCountArgs} args - Arguments to filter SaleProducts to count.
     * @example
     * // Count the number of SaleProducts
     * const count = await prisma.saleProduct.count({
     *   where: {
     *     // ... the filter for the SaleProducts we want to count
     *   }
     * })
    **/
    count<T extends SaleProductCountArgs>(
      args?: Subset<T, SaleProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleProductAggregateArgs>(args: Subset<T, SaleProductAggregateArgs>): Prisma.PrismaPromise<GetSaleProductAggregateType<T>>

    /**
     * Group by SaleProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductGroupByArgs} args - Group by arguments.
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
      T extends SaleProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleProductGroupByArgs['orderBy'] }
        : { orderBy?: SaleProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleProduct model
   */
  readonly fields: SaleProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    additions<T extends SaleProduct$additionsArgs<ExtArgs> = {}>(args?: Subset<T, SaleProduct$additionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleProductAdditionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SaleProduct model
   */ 
  interface SaleProductFieldRefs {
    readonly id: FieldRef<"SaleProduct", 'String'>
    readonly saleId: FieldRef<"SaleProduct", 'Int'>
    readonly productId: FieldRef<"SaleProduct", 'Int'>
    readonly quantity: FieldRef<"SaleProduct", 'Float'>
    readonly observation: FieldRef<"SaleProduct", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SaleProduct findUnique
   */
  export type SaleProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProduct
     */
    select?: SaleProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductInclude<ExtArgs> | null
    /**
     * Filter, which SaleProduct to fetch.
     */
    where: SaleProductWhereUniqueInput
  }

  /**
   * SaleProduct findUniqueOrThrow
   */
  export type SaleProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProduct
     */
    select?: SaleProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductInclude<ExtArgs> | null
    /**
     * Filter, which SaleProduct to fetch.
     */
    where: SaleProductWhereUniqueInput
  }

  /**
   * SaleProduct findFirst
   */
  export type SaleProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProduct
     */
    select?: SaleProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductInclude<ExtArgs> | null
    /**
     * Filter, which SaleProduct to fetch.
     */
    where?: SaleProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleProducts to fetch.
     */
    orderBy?: SaleProductOrderByWithRelationInput | SaleProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleProducts.
     */
    cursor?: SaleProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleProducts.
     */
    distinct?: SaleProductScalarFieldEnum | SaleProductScalarFieldEnum[]
  }

  /**
   * SaleProduct findFirstOrThrow
   */
  export type SaleProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProduct
     */
    select?: SaleProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductInclude<ExtArgs> | null
    /**
     * Filter, which SaleProduct to fetch.
     */
    where?: SaleProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleProducts to fetch.
     */
    orderBy?: SaleProductOrderByWithRelationInput | SaleProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleProducts.
     */
    cursor?: SaleProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleProducts.
     */
    distinct?: SaleProductScalarFieldEnum | SaleProductScalarFieldEnum[]
  }

  /**
   * SaleProduct findMany
   */
  export type SaleProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProduct
     */
    select?: SaleProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductInclude<ExtArgs> | null
    /**
     * Filter, which SaleProducts to fetch.
     */
    where?: SaleProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleProducts to fetch.
     */
    orderBy?: SaleProductOrderByWithRelationInput | SaleProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleProducts.
     */
    cursor?: SaleProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleProducts.
     */
    skip?: number
    distinct?: SaleProductScalarFieldEnum | SaleProductScalarFieldEnum[]
  }

  /**
   * SaleProduct create
   */
  export type SaleProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProduct
     */
    select?: SaleProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleProduct.
     */
    data: XOR<SaleProductCreateInput, SaleProductUncheckedCreateInput>
  }

  /**
   * SaleProduct createMany
   */
  export type SaleProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleProducts.
     */
    data: SaleProductCreateManyInput | SaleProductCreateManyInput[]
  }

  /**
   * SaleProduct createManyAndReturn
   */
  export type SaleProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProduct
     */
    select?: SaleProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SaleProducts.
     */
    data: SaleProductCreateManyInput | SaleProductCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleProduct update
   */
  export type SaleProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProduct
     */
    select?: SaleProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleProduct.
     */
    data: XOR<SaleProductUpdateInput, SaleProductUncheckedUpdateInput>
    /**
     * Choose, which SaleProduct to update.
     */
    where: SaleProductWhereUniqueInput
  }

  /**
   * SaleProduct updateMany
   */
  export type SaleProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleProducts.
     */
    data: XOR<SaleProductUpdateManyMutationInput, SaleProductUncheckedUpdateManyInput>
    /**
     * Filter which SaleProducts to update
     */
    where?: SaleProductWhereInput
  }

  /**
   * SaleProduct upsert
   */
  export type SaleProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProduct
     */
    select?: SaleProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleProduct to update in case it exists.
     */
    where: SaleProductWhereUniqueInput
    /**
     * In case the SaleProduct found by the `where` argument doesn't exist, create a new SaleProduct with this data.
     */
    create: XOR<SaleProductCreateInput, SaleProductUncheckedCreateInput>
    /**
     * In case the SaleProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleProductUpdateInput, SaleProductUncheckedUpdateInput>
  }

  /**
   * SaleProduct delete
   */
  export type SaleProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProduct
     */
    select?: SaleProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductInclude<ExtArgs> | null
    /**
     * Filter which SaleProduct to delete.
     */
    where: SaleProductWhereUniqueInput
  }

  /**
   * SaleProduct deleteMany
   */
  export type SaleProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleProducts to delete
     */
    where?: SaleProductWhereInput
  }

  /**
   * SaleProduct.additions
   */
  export type SaleProduct$additionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProductAddition
     */
    select?: SaleProductAdditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductAdditionInclude<ExtArgs> | null
    where?: SaleProductAdditionWhereInput
    orderBy?: SaleProductAdditionOrderByWithRelationInput | SaleProductAdditionOrderByWithRelationInput[]
    cursor?: SaleProductAdditionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleProductAdditionScalarFieldEnum | SaleProductAdditionScalarFieldEnum[]
  }

  /**
   * SaleProduct without action
   */
  export type SaleProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProduct
     */
    select?: SaleProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductInclude<ExtArgs> | null
  }


  /**
   * Model SaleProductAddition
   */

  export type AggregateSaleProductAddition = {
    _count: SaleProductAdditionCountAggregateOutputType | null
    _avg: SaleProductAdditionAvgAggregateOutputType | null
    _sum: SaleProductAdditionSumAggregateOutputType | null
    _min: SaleProductAdditionMinAggregateOutputType | null
    _max: SaleProductAdditionMaxAggregateOutputType | null
  }

  export type SaleProductAdditionAvgAggregateOutputType = {
    id: number | null
    price: number | null
    additionId: number | null
  }

  export type SaleProductAdditionSumAggregateOutputType = {
    id: number | null
    price: number | null
    additionId: number | null
  }

  export type SaleProductAdditionMinAggregateOutputType = {
    id: number | null
    saleProductId: string | null
    name: string | null
    price: number | null
    additionId: number | null
  }

  export type SaleProductAdditionMaxAggregateOutputType = {
    id: number | null
    saleProductId: string | null
    name: string | null
    price: number | null
    additionId: number | null
  }

  export type SaleProductAdditionCountAggregateOutputType = {
    id: number
    saleProductId: number
    name: number
    price: number
    additionId: number
    _all: number
  }


  export type SaleProductAdditionAvgAggregateInputType = {
    id?: true
    price?: true
    additionId?: true
  }

  export type SaleProductAdditionSumAggregateInputType = {
    id?: true
    price?: true
    additionId?: true
  }

  export type SaleProductAdditionMinAggregateInputType = {
    id?: true
    saleProductId?: true
    name?: true
    price?: true
    additionId?: true
  }

  export type SaleProductAdditionMaxAggregateInputType = {
    id?: true
    saleProductId?: true
    name?: true
    price?: true
    additionId?: true
  }

  export type SaleProductAdditionCountAggregateInputType = {
    id?: true
    saleProductId?: true
    name?: true
    price?: true
    additionId?: true
    _all?: true
  }

  export type SaleProductAdditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleProductAddition to aggregate.
     */
    where?: SaleProductAdditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleProductAdditions to fetch.
     */
    orderBy?: SaleProductAdditionOrderByWithRelationInput | SaleProductAdditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleProductAdditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleProductAdditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleProductAdditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleProductAdditions
    **/
    _count?: true | SaleProductAdditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleProductAdditionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleProductAdditionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleProductAdditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleProductAdditionMaxAggregateInputType
  }

  export type GetSaleProductAdditionAggregateType<T extends SaleProductAdditionAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleProductAddition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleProductAddition[P]>
      : GetScalarType<T[P], AggregateSaleProductAddition[P]>
  }




  export type SaleProductAdditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleProductAdditionWhereInput
    orderBy?: SaleProductAdditionOrderByWithAggregationInput | SaleProductAdditionOrderByWithAggregationInput[]
    by: SaleProductAdditionScalarFieldEnum[] | SaleProductAdditionScalarFieldEnum
    having?: SaleProductAdditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleProductAdditionCountAggregateInputType | true
    _avg?: SaleProductAdditionAvgAggregateInputType
    _sum?: SaleProductAdditionSumAggregateInputType
    _min?: SaleProductAdditionMinAggregateInputType
    _max?: SaleProductAdditionMaxAggregateInputType
  }

  export type SaleProductAdditionGroupByOutputType = {
    id: number
    saleProductId: string
    name: string
    price: number
    additionId: number | null
    _count: SaleProductAdditionCountAggregateOutputType | null
    _avg: SaleProductAdditionAvgAggregateOutputType | null
    _sum: SaleProductAdditionSumAggregateOutputType | null
    _min: SaleProductAdditionMinAggregateOutputType | null
    _max: SaleProductAdditionMaxAggregateOutputType | null
  }

  type GetSaleProductAdditionGroupByPayload<T extends SaleProductAdditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleProductAdditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleProductAdditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleProductAdditionGroupByOutputType[P]>
            : GetScalarType<T[P], SaleProductAdditionGroupByOutputType[P]>
        }
      >
    >


  export type SaleProductAdditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleProductId?: boolean
    name?: boolean
    price?: boolean
    additionId?: boolean
    saleProduct?: boolean | SaleProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleProductAddition"]>

  export type SaleProductAdditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleProductId?: boolean
    name?: boolean
    price?: boolean
    additionId?: boolean
    saleProduct?: boolean | SaleProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleProductAddition"]>

  export type SaleProductAdditionSelectScalar = {
    id?: boolean
    saleProductId?: boolean
    name?: boolean
    price?: boolean
    additionId?: boolean
  }

  export type SaleProductAdditionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleProduct?: boolean | SaleProductDefaultArgs<ExtArgs>
  }
  export type SaleProductAdditionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleProduct?: boolean | SaleProductDefaultArgs<ExtArgs>
  }

  export type $SaleProductAdditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleProductAddition"
    objects: {
      saleProduct: Prisma.$SaleProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      saleProductId: string
      name: string
      price: number
      additionId: number | null
    }, ExtArgs["result"]["saleProductAddition"]>
    composites: {}
  }

  type SaleProductAdditionGetPayload<S extends boolean | null | undefined | SaleProductAdditionDefaultArgs> = $Result.GetResult<Prisma.$SaleProductAdditionPayload, S>

  type SaleProductAdditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SaleProductAdditionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SaleProductAdditionCountAggregateInputType | true
    }

  export interface SaleProductAdditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleProductAddition'], meta: { name: 'SaleProductAddition' } }
    /**
     * Find zero or one SaleProductAddition that matches the filter.
     * @param {SaleProductAdditionFindUniqueArgs} args - Arguments to find a SaleProductAddition
     * @example
     * // Get one SaleProductAddition
     * const saleProductAddition = await prisma.saleProductAddition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleProductAdditionFindUniqueArgs>(args: SelectSubset<T, SaleProductAdditionFindUniqueArgs<ExtArgs>>): Prisma__SaleProductAdditionClient<$Result.GetResult<Prisma.$SaleProductAdditionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SaleProductAddition that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SaleProductAdditionFindUniqueOrThrowArgs} args - Arguments to find a SaleProductAddition
     * @example
     * // Get one SaleProductAddition
     * const saleProductAddition = await prisma.saleProductAddition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleProductAdditionFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleProductAdditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleProductAdditionClient<$Result.GetResult<Prisma.$SaleProductAdditionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SaleProductAddition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductAdditionFindFirstArgs} args - Arguments to find a SaleProductAddition
     * @example
     * // Get one SaleProductAddition
     * const saleProductAddition = await prisma.saleProductAddition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleProductAdditionFindFirstArgs>(args?: SelectSubset<T, SaleProductAdditionFindFirstArgs<ExtArgs>>): Prisma__SaleProductAdditionClient<$Result.GetResult<Prisma.$SaleProductAdditionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SaleProductAddition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductAdditionFindFirstOrThrowArgs} args - Arguments to find a SaleProductAddition
     * @example
     * // Get one SaleProductAddition
     * const saleProductAddition = await prisma.saleProductAddition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleProductAdditionFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleProductAdditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleProductAdditionClient<$Result.GetResult<Prisma.$SaleProductAdditionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SaleProductAdditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductAdditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleProductAdditions
     * const saleProductAdditions = await prisma.saleProductAddition.findMany()
     * 
     * // Get first 10 SaleProductAdditions
     * const saleProductAdditions = await prisma.saleProductAddition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleProductAdditionWithIdOnly = await prisma.saleProductAddition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleProductAdditionFindManyArgs>(args?: SelectSubset<T, SaleProductAdditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleProductAdditionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SaleProductAddition.
     * @param {SaleProductAdditionCreateArgs} args - Arguments to create a SaleProductAddition.
     * @example
     * // Create one SaleProductAddition
     * const SaleProductAddition = await prisma.saleProductAddition.create({
     *   data: {
     *     // ... data to create a SaleProductAddition
     *   }
     * })
     * 
     */
    create<T extends SaleProductAdditionCreateArgs>(args: SelectSubset<T, SaleProductAdditionCreateArgs<ExtArgs>>): Prisma__SaleProductAdditionClient<$Result.GetResult<Prisma.$SaleProductAdditionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SaleProductAdditions.
     * @param {SaleProductAdditionCreateManyArgs} args - Arguments to create many SaleProductAdditions.
     * @example
     * // Create many SaleProductAdditions
     * const saleProductAddition = await prisma.saleProductAddition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleProductAdditionCreateManyArgs>(args?: SelectSubset<T, SaleProductAdditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleProductAdditions and returns the data saved in the database.
     * @param {SaleProductAdditionCreateManyAndReturnArgs} args - Arguments to create many SaleProductAdditions.
     * @example
     * // Create many SaleProductAdditions
     * const saleProductAddition = await prisma.saleProductAddition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleProductAdditions and only return the `id`
     * const saleProductAdditionWithIdOnly = await prisma.saleProductAddition.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleProductAdditionCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleProductAdditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleProductAdditionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SaleProductAddition.
     * @param {SaleProductAdditionDeleteArgs} args - Arguments to delete one SaleProductAddition.
     * @example
     * // Delete one SaleProductAddition
     * const SaleProductAddition = await prisma.saleProductAddition.delete({
     *   where: {
     *     // ... filter to delete one SaleProductAddition
     *   }
     * })
     * 
     */
    delete<T extends SaleProductAdditionDeleteArgs>(args: SelectSubset<T, SaleProductAdditionDeleteArgs<ExtArgs>>): Prisma__SaleProductAdditionClient<$Result.GetResult<Prisma.$SaleProductAdditionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SaleProductAddition.
     * @param {SaleProductAdditionUpdateArgs} args - Arguments to update one SaleProductAddition.
     * @example
     * // Update one SaleProductAddition
     * const saleProductAddition = await prisma.saleProductAddition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleProductAdditionUpdateArgs>(args: SelectSubset<T, SaleProductAdditionUpdateArgs<ExtArgs>>): Prisma__SaleProductAdditionClient<$Result.GetResult<Prisma.$SaleProductAdditionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SaleProductAdditions.
     * @param {SaleProductAdditionDeleteManyArgs} args - Arguments to filter SaleProductAdditions to delete.
     * @example
     * // Delete a few SaleProductAdditions
     * const { count } = await prisma.saleProductAddition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleProductAdditionDeleteManyArgs>(args?: SelectSubset<T, SaleProductAdditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleProductAdditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductAdditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleProductAdditions
     * const saleProductAddition = await prisma.saleProductAddition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleProductAdditionUpdateManyArgs>(args: SelectSubset<T, SaleProductAdditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SaleProductAddition.
     * @param {SaleProductAdditionUpsertArgs} args - Arguments to update or create a SaleProductAddition.
     * @example
     * // Update or create a SaleProductAddition
     * const saleProductAddition = await prisma.saleProductAddition.upsert({
     *   create: {
     *     // ... data to create a SaleProductAddition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleProductAddition we want to update
     *   }
     * })
     */
    upsert<T extends SaleProductAdditionUpsertArgs>(args: SelectSubset<T, SaleProductAdditionUpsertArgs<ExtArgs>>): Prisma__SaleProductAdditionClient<$Result.GetResult<Prisma.$SaleProductAdditionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SaleProductAdditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductAdditionCountArgs} args - Arguments to filter SaleProductAdditions to count.
     * @example
     * // Count the number of SaleProductAdditions
     * const count = await prisma.saleProductAddition.count({
     *   where: {
     *     // ... the filter for the SaleProductAdditions we want to count
     *   }
     * })
    **/
    count<T extends SaleProductAdditionCountArgs>(
      args?: Subset<T, SaleProductAdditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleProductAdditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleProductAddition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductAdditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleProductAdditionAggregateArgs>(args: Subset<T, SaleProductAdditionAggregateArgs>): Prisma.PrismaPromise<GetSaleProductAdditionAggregateType<T>>

    /**
     * Group by SaleProductAddition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleProductAdditionGroupByArgs} args - Group by arguments.
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
      T extends SaleProductAdditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleProductAdditionGroupByArgs['orderBy'] }
        : { orderBy?: SaleProductAdditionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleProductAdditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleProductAdditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleProductAddition model
   */
  readonly fields: SaleProductAdditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleProductAddition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleProductAdditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saleProduct<T extends SaleProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleProductDefaultArgs<ExtArgs>>): Prisma__SaleProductClient<$Result.GetResult<Prisma.$SaleProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SaleProductAddition model
   */ 
  interface SaleProductAdditionFieldRefs {
    readonly id: FieldRef<"SaleProductAddition", 'Int'>
    readonly saleProductId: FieldRef<"SaleProductAddition", 'String'>
    readonly name: FieldRef<"SaleProductAddition", 'String'>
    readonly price: FieldRef<"SaleProductAddition", 'Float'>
    readonly additionId: FieldRef<"SaleProductAddition", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SaleProductAddition findUnique
   */
  export type SaleProductAdditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProductAddition
     */
    select?: SaleProductAdditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductAdditionInclude<ExtArgs> | null
    /**
     * Filter, which SaleProductAddition to fetch.
     */
    where: SaleProductAdditionWhereUniqueInput
  }

  /**
   * SaleProductAddition findUniqueOrThrow
   */
  export type SaleProductAdditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProductAddition
     */
    select?: SaleProductAdditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductAdditionInclude<ExtArgs> | null
    /**
     * Filter, which SaleProductAddition to fetch.
     */
    where: SaleProductAdditionWhereUniqueInput
  }

  /**
   * SaleProductAddition findFirst
   */
  export type SaleProductAdditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProductAddition
     */
    select?: SaleProductAdditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductAdditionInclude<ExtArgs> | null
    /**
     * Filter, which SaleProductAddition to fetch.
     */
    where?: SaleProductAdditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleProductAdditions to fetch.
     */
    orderBy?: SaleProductAdditionOrderByWithRelationInput | SaleProductAdditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleProductAdditions.
     */
    cursor?: SaleProductAdditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleProductAdditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleProductAdditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleProductAdditions.
     */
    distinct?: SaleProductAdditionScalarFieldEnum | SaleProductAdditionScalarFieldEnum[]
  }

  /**
   * SaleProductAddition findFirstOrThrow
   */
  export type SaleProductAdditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProductAddition
     */
    select?: SaleProductAdditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductAdditionInclude<ExtArgs> | null
    /**
     * Filter, which SaleProductAddition to fetch.
     */
    where?: SaleProductAdditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleProductAdditions to fetch.
     */
    orderBy?: SaleProductAdditionOrderByWithRelationInput | SaleProductAdditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleProductAdditions.
     */
    cursor?: SaleProductAdditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleProductAdditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleProductAdditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleProductAdditions.
     */
    distinct?: SaleProductAdditionScalarFieldEnum | SaleProductAdditionScalarFieldEnum[]
  }

  /**
   * SaleProductAddition findMany
   */
  export type SaleProductAdditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProductAddition
     */
    select?: SaleProductAdditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductAdditionInclude<ExtArgs> | null
    /**
     * Filter, which SaleProductAdditions to fetch.
     */
    where?: SaleProductAdditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleProductAdditions to fetch.
     */
    orderBy?: SaleProductAdditionOrderByWithRelationInput | SaleProductAdditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleProductAdditions.
     */
    cursor?: SaleProductAdditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleProductAdditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleProductAdditions.
     */
    skip?: number
    distinct?: SaleProductAdditionScalarFieldEnum | SaleProductAdditionScalarFieldEnum[]
  }

  /**
   * SaleProductAddition create
   */
  export type SaleProductAdditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProductAddition
     */
    select?: SaleProductAdditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductAdditionInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleProductAddition.
     */
    data: XOR<SaleProductAdditionCreateInput, SaleProductAdditionUncheckedCreateInput>
  }

  /**
   * SaleProductAddition createMany
   */
  export type SaleProductAdditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleProductAdditions.
     */
    data: SaleProductAdditionCreateManyInput | SaleProductAdditionCreateManyInput[]
  }

  /**
   * SaleProductAddition createManyAndReturn
   */
  export type SaleProductAdditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProductAddition
     */
    select?: SaleProductAdditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SaleProductAdditions.
     */
    data: SaleProductAdditionCreateManyInput | SaleProductAdditionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductAdditionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleProductAddition update
   */
  export type SaleProductAdditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProductAddition
     */
    select?: SaleProductAdditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductAdditionInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleProductAddition.
     */
    data: XOR<SaleProductAdditionUpdateInput, SaleProductAdditionUncheckedUpdateInput>
    /**
     * Choose, which SaleProductAddition to update.
     */
    where: SaleProductAdditionWhereUniqueInput
  }

  /**
   * SaleProductAddition updateMany
   */
  export type SaleProductAdditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleProductAdditions.
     */
    data: XOR<SaleProductAdditionUpdateManyMutationInput, SaleProductAdditionUncheckedUpdateManyInput>
    /**
     * Filter which SaleProductAdditions to update
     */
    where?: SaleProductAdditionWhereInput
  }

  /**
   * SaleProductAddition upsert
   */
  export type SaleProductAdditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProductAddition
     */
    select?: SaleProductAdditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductAdditionInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleProductAddition to update in case it exists.
     */
    where: SaleProductAdditionWhereUniqueInput
    /**
     * In case the SaleProductAddition found by the `where` argument doesn't exist, create a new SaleProductAddition with this data.
     */
    create: XOR<SaleProductAdditionCreateInput, SaleProductAdditionUncheckedCreateInput>
    /**
     * In case the SaleProductAddition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleProductAdditionUpdateInput, SaleProductAdditionUncheckedUpdateInput>
  }

  /**
   * SaleProductAddition delete
   */
  export type SaleProductAdditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProductAddition
     */
    select?: SaleProductAdditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductAdditionInclude<ExtArgs> | null
    /**
     * Filter which SaleProductAddition to delete.
     */
    where: SaleProductAdditionWhereUniqueInput
  }

  /**
   * SaleProductAddition deleteMany
   */
  export type SaleProductAdditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleProductAdditions to delete
     */
    where?: SaleProductAdditionWhereInput
  }

  /**
   * SaleProductAddition without action
   */
  export type SaleProductAdditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleProductAddition
     */
    select?: SaleProductAdditionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleProductAdditionInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    id: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    id: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: number | null
    endpoint: string | null
    expirationTime: Date | null
    keys: string | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: number | null
    endpoint: string | null
    expirationTime: Date | null
    keys: string | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    endpoint: number
    expirationTime: number
    keys: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    id?: true
  }

  export type SubscriptionSumAggregateInputType = {
    id?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    endpoint?: true
    expirationTime?: true
    keys?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    endpoint?: true
    expirationTime?: true
    keys?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    endpoint?: true
    expirationTime?: true
    keys?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: number
    endpoint: string
    expirationTime: Date | null
    keys: string
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpoint?: boolean
    expirationTime?: boolean
    keys?: boolean
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpoint?: boolean
    expirationTime?: boolean
    keys?: boolean
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    endpoint?: boolean
    expirationTime?: boolean
    keys?: boolean
  }


  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      endpoint: string
      expirationTime: Date | null
      keys: string
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'Int'>
    readonly endpoint: FieldRef<"Subscription", 'String'>
    readonly expirationTime: FieldRef<"Subscription", 'DateTime'>
    readonly keys: FieldRef<"Subscription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    role: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    role: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    role?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    role?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    role: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
      role: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Utils
   */

  export type AggregateUtils = {
    _count: UtilsCountAggregateOutputType | null
    _avg: UtilsAvgAggregateOutputType | null
    _sum: UtilsSumAggregateOutputType | null
    _min: UtilsMinAggregateOutputType | null
    _max: UtilsMaxAggregateOutputType | null
  }

  export type UtilsAvgAggregateOutputType = {
    id: number | null
  }

  export type UtilsSumAggregateOutputType = {
    id: number | null
  }

  export type UtilsMinAggregateOutputType = {
    id: number | null
    ipv4: string | null
    created_at: Date | null
  }

  export type UtilsMaxAggregateOutputType = {
    id: number | null
    ipv4: string | null
    created_at: Date | null
  }

  export type UtilsCountAggregateOutputType = {
    id: number
    ipv4: number
    created_at: number
    _all: number
  }


  export type UtilsAvgAggregateInputType = {
    id?: true
  }

  export type UtilsSumAggregateInputType = {
    id?: true
  }

  export type UtilsMinAggregateInputType = {
    id?: true
    ipv4?: true
    created_at?: true
  }

  export type UtilsMaxAggregateInputType = {
    id?: true
    ipv4?: true
    created_at?: true
  }

  export type UtilsCountAggregateInputType = {
    id?: true
    ipv4?: true
    created_at?: true
    _all?: true
  }

  export type UtilsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utils to aggregate.
     */
    where?: UtilsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utils to fetch.
     */
    orderBy?: UtilsOrderByWithRelationInput | UtilsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utils
    **/
    _count?: true | UtilsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilsMaxAggregateInputType
  }

  export type GetUtilsAggregateType<T extends UtilsAggregateArgs> = {
        [P in keyof T & keyof AggregateUtils]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtils[P]>
      : GetScalarType<T[P], AggregateUtils[P]>
  }




  export type UtilsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilsWhereInput
    orderBy?: UtilsOrderByWithAggregationInput | UtilsOrderByWithAggregationInput[]
    by: UtilsScalarFieldEnum[] | UtilsScalarFieldEnum
    having?: UtilsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilsCountAggregateInputType | true
    _avg?: UtilsAvgAggregateInputType
    _sum?: UtilsSumAggregateInputType
    _min?: UtilsMinAggregateInputType
    _max?: UtilsMaxAggregateInputType
  }

  export type UtilsGroupByOutputType = {
    id: number
    ipv4: string
    created_at: Date
    _count: UtilsCountAggregateOutputType | null
    _avg: UtilsAvgAggregateOutputType | null
    _sum: UtilsSumAggregateOutputType | null
    _min: UtilsMinAggregateOutputType | null
    _max: UtilsMaxAggregateOutputType | null
  }

  type GetUtilsGroupByPayload<T extends UtilsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilsGroupByOutputType[P]>
            : GetScalarType<T[P], UtilsGroupByOutputType[P]>
        }
      >
    >


  export type UtilsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipv4?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["utils"]>

  export type UtilsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipv4?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["utils"]>

  export type UtilsSelectScalar = {
    id?: boolean
    ipv4?: boolean
    created_at?: boolean
  }


  export type $UtilsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utils"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ipv4: string
      created_at: Date
    }, ExtArgs["result"]["utils"]>
    composites: {}
  }

  type UtilsGetPayload<S extends boolean | null | undefined | UtilsDefaultArgs> = $Result.GetResult<Prisma.$UtilsPayload, S>

  type UtilsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UtilsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UtilsCountAggregateInputType | true
    }

  export interface UtilsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utils'], meta: { name: 'Utils' } }
    /**
     * Find zero or one Utils that matches the filter.
     * @param {UtilsFindUniqueArgs} args - Arguments to find a Utils
     * @example
     * // Get one Utils
     * const utils = await prisma.utils.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilsFindUniqueArgs>(args: SelectSubset<T, UtilsFindUniqueArgs<ExtArgs>>): Prisma__UtilsClient<$Result.GetResult<Prisma.$UtilsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Utils that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UtilsFindUniqueOrThrowArgs} args - Arguments to find a Utils
     * @example
     * // Get one Utils
     * const utils = await prisma.utils.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilsFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilsClient<$Result.GetResult<Prisma.$UtilsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Utils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilsFindFirstArgs} args - Arguments to find a Utils
     * @example
     * // Get one Utils
     * const utils = await prisma.utils.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilsFindFirstArgs>(args?: SelectSubset<T, UtilsFindFirstArgs<ExtArgs>>): Prisma__UtilsClient<$Result.GetResult<Prisma.$UtilsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Utils that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilsFindFirstOrThrowArgs} args - Arguments to find a Utils
     * @example
     * // Get one Utils
     * const utils = await prisma.utils.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilsFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilsClient<$Result.GetResult<Prisma.$UtilsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Utils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utils
     * const utils = await prisma.utils.findMany()
     * 
     * // Get first 10 Utils
     * const utils = await prisma.utils.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilsWithIdOnly = await prisma.utils.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilsFindManyArgs>(args?: SelectSubset<T, UtilsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Utils.
     * @param {UtilsCreateArgs} args - Arguments to create a Utils.
     * @example
     * // Create one Utils
     * const Utils = await prisma.utils.create({
     *   data: {
     *     // ... data to create a Utils
     *   }
     * })
     * 
     */
    create<T extends UtilsCreateArgs>(args: SelectSubset<T, UtilsCreateArgs<ExtArgs>>): Prisma__UtilsClient<$Result.GetResult<Prisma.$UtilsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Utils.
     * @param {UtilsCreateManyArgs} args - Arguments to create many Utils.
     * @example
     * // Create many Utils
     * const utils = await prisma.utils.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilsCreateManyArgs>(args?: SelectSubset<T, UtilsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utils and returns the data saved in the database.
     * @param {UtilsCreateManyAndReturnArgs} args - Arguments to create many Utils.
     * @example
     * // Create many Utils
     * const utils = await prisma.utils.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utils and only return the `id`
     * const utilsWithIdOnly = await prisma.utils.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilsCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Utils.
     * @param {UtilsDeleteArgs} args - Arguments to delete one Utils.
     * @example
     * // Delete one Utils
     * const Utils = await prisma.utils.delete({
     *   where: {
     *     // ... filter to delete one Utils
     *   }
     * })
     * 
     */
    delete<T extends UtilsDeleteArgs>(args: SelectSubset<T, UtilsDeleteArgs<ExtArgs>>): Prisma__UtilsClient<$Result.GetResult<Prisma.$UtilsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Utils.
     * @param {UtilsUpdateArgs} args - Arguments to update one Utils.
     * @example
     * // Update one Utils
     * const utils = await prisma.utils.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilsUpdateArgs>(args: SelectSubset<T, UtilsUpdateArgs<ExtArgs>>): Prisma__UtilsClient<$Result.GetResult<Prisma.$UtilsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Utils.
     * @param {UtilsDeleteManyArgs} args - Arguments to filter Utils to delete.
     * @example
     * // Delete a few Utils
     * const { count } = await prisma.utils.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilsDeleteManyArgs>(args?: SelectSubset<T, UtilsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utils
     * const utils = await prisma.utils.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilsUpdateManyArgs>(args: SelectSubset<T, UtilsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Utils.
     * @param {UtilsUpsertArgs} args - Arguments to update or create a Utils.
     * @example
     * // Update or create a Utils
     * const utils = await prisma.utils.upsert({
     *   create: {
     *     // ... data to create a Utils
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utils we want to update
     *   }
     * })
     */
    upsert<T extends UtilsUpsertArgs>(args: SelectSubset<T, UtilsUpsertArgs<ExtArgs>>): Prisma__UtilsClient<$Result.GetResult<Prisma.$UtilsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Utils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilsCountArgs} args - Arguments to filter Utils to count.
     * @example
     * // Count the number of Utils
     * const count = await prisma.utils.count({
     *   where: {
     *     // ... the filter for the Utils we want to count
     *   }
     * })
    **/
    count<T extends UtilsCountArgs>(
      args?: Subset<T, UtilsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilsAggregateArgs>(args: Subset<T, UtilsAggregateArgs>): Prisma.PrismaPromise<GetUtilsAggregateType<T>>

    /**
     * Group by Utils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilsGroupByArgs} args - Group by arguments.
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
      T extends UtilsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilsGroupByArgs['orderBy'] }
        : { orderBy?: UtilsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utils model
   */
  readonly fields: UtilsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utils.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Utils model
   */ 
  interface UtilsFieldRefs {
    readonly id: FieldRef<"Utils", 'Int'>
    readonly ipv4: FieldRef<"Utils", 'String'>
    readonly created_at: FieldRef<"Utils", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utils findUnique
   */
  export type UtilsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utils
     */
    select?: UtilsSelect<ExtArgs> | null
    /**
     * Filter, which Utils to fetch.
     */
    where: UtilsWhereUniqueInput
  }

  /**
   * Utils findUniqueOrThrow
   */
  export type UtilsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utils
     */
    select?: UtilsSelect<ExtArgs> | null
    /**
     * Filter, which Utils to fetch.
     */
    where: UtilsWhereUniqueInput
  }

  /**
   * Utils findFirst
   */
  export type UtilsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utils
     */
    select?: UtilsSelect<ExtArgs> | null
    /**
     * Filter, which Utils to fetch.
     */
    where?: UtilsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utils to fetch.
     */
    orderBy?: UtilsOrderByWithRelationInput | UtilsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utils.
     */
    cursor?: UtilsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utils.
     */
    distinct?: UtilsScalarFieldEnum | UtilsScalarFieldEnum[]
  }

  /**
   * Utils findFirstOrThrow
   */
  export type UtilsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utils
     */
    select?: UtilsSelect<ExtArgs> | null
    /**
     * Filter, which Utils to fetch.
     */
    where?: UtilsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utils to fetch.
     */
    orderBy?: UtilsOrderByWithRelationInput | UtilsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utils.
     */
    cursor?: UtilsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utils.
     */
    distinct?: UtilsScalarFieldEnum | UtilsScalarFieldEnum[]
  }

  /**
   * Utils findMany
   */
  export type UtilsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utils
     */
    select?: UtilsSelect<ExtArgs> | null
    /**
     * Filter, which Utils to fetch.
     */
    where?: UtilsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utils to fetch.
     */
    orderBy?: UtilsOrderByWithRelationInput | UtilsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utils.
     */
    cursor?: UtilsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utils.
     */
    skip?: number
    distinct?: UtilsScalarFieldEnum | UtilsScalarFieldEnum[]
  }

  /**
   * Utils create
   */
  export type UtilsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utils
     */
    select?: UtilsSelect<ExtArgs> | null
    /**
     * The data needed to create a Utils.
     */
    data: XOR<UtilsCreateInput, UtilsUncheckedCreateInput>
  }

  /**
   * Utils createMany
   */
  export type UtilsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utils.
     */
    data: UtilsCreateManyInput | UtilsCreateManyInput[]
  }

  /**
   * Utils createManyAndReturn
   */
  export type UtilsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utils
     */
    select?: UtilsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Utils.
     */
    data: UtilsCreateManyInput | UtilsCreateManyInput[]
  }

  /**
   * Utils update
   */
  export type UtilsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utils
     */
    select?: UtilsSelect<ExtArgs> | null
    /**
     * The data needed to update a Utils.
     */
    data: XOR<UtilsUpdateInput, UtilsUncheckedUpdateInput>
    /**
     * Choose, which Utils to update.
     */
    where: UtilsWhereUniqueInput
  }

  /**
   * Utils updateMany
   */
  export type UtilsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utils.
     */
    data: XOR<UtilsUpdateManyMutationInput, UtilsUncheckedUpdateManyInput>
    /**
     * Filter which Utils to update
     */
    where?: UtilsWhereInput
  }

  /**
   * Utils upsert
   */
  export type UtilsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utils
     */
    select?: UtilsSelect<ExtArgs> | null
    /**
     * The filter to search for the Utils to update in case it exists.
     */
    where: UtilsWhereUniqueInput
    /**
     * In case the Utils found by the `where` argument doesn't exist, create a new Utils with this data.
     */
    create: XOR<UtilsCreateInput, UtilsUncheckedCreateInput>
    /**
     * In case the Utils was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilsUpdateInput, UtilsUncheckedUpdateInput>
  }

  /**
   * Utils delete
   */
  export type UtilsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utils
     */
    select?: UtilsSelect<ExtArgs> | null
    /**
     * Filter which Utils to delete.
     */
    where: UtilsWhereUniqueInput
  }

  /**
   * Utils deleteMany
   */
  export type UtilsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utils to delete
     */
    where?: UtilsWhereInput
  }

  /**
   * Utils without action
   */
  export type UtilsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utils
     */
    select?: UtilsSelect<ExtArgs> | null
  }


  /**
   * Model ProviderMovement
   */

  export type AggregateProviderMovement = {
    _count: ProviderMovementCountAggregateOutputType | null
    _avg: ProviderMovementAvgAggregateOutputType | null
    _sum: ProviderMovementSumAggregateOutputType | null
    _min: ProviderMovementMinAggregateOutputType | null
    _max: ProviderMovementMaxAggregateOutputType | null
  }

  export type ProviderMovementAvgAggregateOutputType = {
    id: number | null
    providerId: number | null
    amount: number | null
  }

  export type ProviderMovementSumAggregateOutputType = {
    id: number | null
    providerId: number | null
    amount: number | null
  }

  export type ProviderMovementMinAggregateOutputType = {
    id: number | null
    providerId: number | null
    type: string | null
    amount: number | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type ProviderMovementMaxAggregateOutputType = {
    id: number | null
    providerId: number | null
    type: string | null
    amount: number | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type ProviderMovementCountAggregateOutputType = {
    id: number
    providerId: number
    type: number
    amount: number
    description: number
    imageUrl: number
    createdAt: number
    _all: number
  }


  export type ProviderMovementAvgAggregateInputType = {
    id?: true
    providerId?: true
    amount?: true
  }

  export type ProviderMovementSumAggregateInputType = {
    id?: true
    providerId?: true
    amount?: true
  }

  export type ProviderMovementMinAggregateInputType = {
    id?: true
    providerId?: true
    type?: true
    amount?: true
    description?: true
    imageUrl?: true
    createdAt?: true
  }

  export type ProviderMovementMaxAggregateInputType = {
    id?: true
    providerId?: true
    type?: true
    amount?: true
    description?: true
    imageUrl?: true
    createdAt?: true
  }

  export type ProviderMovementCountAggregateInputType = {
    id?: true
    providerId?: true
    type?: true
    amount?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ProviderMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderMovement to aggregate.
     */
    where?: ProviderMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderMovements to fetch.
     */
    orderBy?: ProviderMovementOrderByWithRelationInput | ProviderMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderMovements
    **/
    _count?: true | ProviderMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMovementMaxAggregateInputType
  }

  export type GetProviderMovementAggregateType<T extends ProviderMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderMovement[P]>
      : GetScalarType<T[P], AggregateProviderMovement[P]>
  }




  export type ProviderMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderMovementWhereInput
    orderBy?: ProviderMovementOrderByWithAggregationInput | ProviderMovementOrderByWithAggregationInput[]
    by: ProviderMovementScalarFieldEnum[] | ProviderMovementScalarFieldEnum
    having?: ProviderMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderMovementCountAggregateInputType | true
    _avg?: ProviderMovementAvgAggregateInputType
    _sum?: ProviderMovementSumAggregateInputType
    _min?: ProviderMovementMinAggregateInputType
    _max?: ProviderMovementMaxAggregateInputType
  }

  export type ProviderMovementGroupByOutputType = {
    id: number
    providerId: number
    type: string
    amount: number
    description: string | null
    imageUrl: string | null
    createdAt: Date
    _count: ProviderMovementCountAggregateOutputType | null
    _avg: ProviderMovementAvgAggregateOutputType | null
    _sum: ProviderMovementSumAggregateOutputType | null
    _min: ProviderMovementMinAggregateOutputType | null
    _max: ProviderMovementMaxAggregateOutputType | null
  }

  type GetProviderMovementGroupByPayload<T extends ProviderMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderMovementGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderMovementGroupByOutputType[P]>
        }
      >
    >


  export type ProviderMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerMovement"]>

  export type ProviderMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerMovement"]>

  export type ProviderMovementSelectScalar = {
    id?: boolean
    providerId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }

  export type ProviderMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type ProviderMovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $ProviderMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderMovement"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      providerId: number
      type: string
      amount: number
      description: string | null
      imageUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["providerMovement"]>
    composites: {}
  }

  type ProviderMovementGetPayload<S extends boolean | null | undefined | ProviderMovementDefaultArgs> = $Result.GetResult<Prisma.$ProviderMovementPayload, S>

  type ProviderMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProviderMovementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProviderMovementCountAggregateInputType | true
    }

  export interface ProviderMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderMovement'], meta: { name: 'ProviderMovement' } }
    /**
     * Find zero or one ProviderMovement that matches the filter.
     * @param {ProviderMovementFindUniqueArgs} args - Arguments to find a ProviderMovement
     * @example
     * // Get one ProviderMovement
     * const providerMovement = await prisma.providerMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderMovementFindUniqueArgs>(args: SelectSubset<T, ProviderMovementFindUniqueArgs<ExtArgs>>): Prisma__ProviderMovementClient<$Result.GetResult<Prisma.$ProviderMovementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProviderMovement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProviderMovementFindUniqueOrThrowArgs} args - Arguments to find a ProviderMovement
     * @example
     * // Get one ProviderMovement
     * const providerMovement = await prisma.providerMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderMovementClient<$Result.GetResult<Prisma.$ProviderMovementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProviderMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderMovementFindFirstArgs} args - Arguments to find a ProviderMovement
     * @example
     * // Get one ProviderMovement
     * const providerMovement = await prisma.providerMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderMovementFindFirstArgs>(args?: SelectSubset<T, ProviderMovementFindFirstArgs<ExtArgs>>): Prisma__ProviderMovementClient<$Result.GetResult<Prisma.$ProviderMovementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProviderMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderMovementFindFirstOrThrowArgs} args - Arguments to find a ProviderMovement
     * @example
     * // Get one ProviderMovement
     * const providerMovement = await prisma.providerMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderMovementClient<$Result.GetResult<Prisma.$ProviderMovementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProviderMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderMovements
     * const providerMovements = await prisma.providerMovement.findMany()
     * 
     * // Get first 10 ProviderMovements
     * const providerMovements = await prisma.providerMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerMovementWithIdOnly = await prisma.providerMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderMovementFindManyArgs>(args?: SelectSubset<T, ProviderMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderMovementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProviderMovement.
     * @param {ProviderMovementCreateArgs} args - Arguments to create a ProviderMovement.
     * @example
     * // Create one ProviderMovement
     * const ProviderMovement = await prisma.providerMovement.create({
     *   data: {
     *     // ... data to create a ProviderMovement
     *   }
     * })
     * 
     */
    create<T extends ProviderMovementCreateArgs>(args: SelectSubset<T, ProviderMovementCreateArgs<ExtArgs>>): Prisma__ProviderMovementClient<$Result.GetResult<Prisma.$ProviderMovementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProviderMovements.
     * @param {ProviderMovementCreateManyArgs} args - Arguments to create many ProviderMovements.
     * @example
     * // Create many ProviderMovements
     * const providerMovement = await prisma.providerMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderMovementCreateManyArgs>(args?: SelectSubset<T, ProviderMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderMovements and returns the data saved in the database.
     * @param {ProviderMovementCreateManyAndReturnArgs} args - Arguments to create many ProviderMovements.
     * @example
     * // Create many ProviderMovements
     * const providerMovement = await prisma.providerMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderMovements and only return the `id`
     * const providerMovementWithIdOnly = await prisma.providerMovement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderMovementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProviderMovement.
     * @param {ProviderMovementDeleteArgs} args - Arguments to delete one ProviderMovement.
     * @example
     * // Delete one ProviderMovement
     * const ProviderMovement = await prisma.providerMovement.delete({
     *   where: {
     *     // ... filter to delete one ProviderMovement
     *   }
     * })
     * 
     */
    delete<T extends ProviderMovementDeleteArgs>(args: SelectSubset<T, ProviderMovementDeleteArgs<ExtArgs>>): Prisma__ProviderMovementClient<$Result.GetResult<Prisma.$ProviderMovementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProviderMovement.
     * @param {ProviderMovementUpdateArgs} args - Arguments to update one ProviderMovement.
     * @example
     * // Update one ProviderMovement
     * const providerMovement = await prisma.providerMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderMovementUpdateArgs>(args: SelectSubset<T, ProviderMovementUpdateArgs<ExtArgs>>): Prisma__ProviderMovementClient<$Result.GetResult<Prisma.$ProviderMovementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProviderMovements.
     * @param {ProviderMovementDeleteManyArgs} args - Arguments to filter ProviderMovements to delete.
     * @example
     * // Delete a few ProviderMovements
     * const { count } = await prisma.providerMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderMovementDeleteManyArgs>(args?: SelectSubset<T, ProviderMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderMovements
     * const providerMovement = await prisma.providerMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderMovementUpdateManyArgs>(args: SelectSubset<T, ProviderMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProviderMovement.
     * @param {ProviderMovementUpsertArgs} args - Arguments to update or create a ProviderMovement.
     * @example
     * // Update or create a ProviderMovement
     * const providerMovement = await prisma.providerMovement.upsert({
     *   create: {
     *     // ... data to create a ProviderMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderMovement we want to update
     *   }
     * })
     */
    upsert<T extends ProviderMovementUpsertArgs>(args: SelectSubset<T, ProviderMovementUpsertArgs<ExtArgs>>): Prisma__ProviderMovementClient<$Result.GetResult<Prisma.$ProviderMovementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProviderMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderMovementCountArgs} args - Arguments to filter ProviderMovements to count.
     * @example
     * // Count the number of ProviderMovements
     * const count = await prisma.providerMovement.count({
     *   where: {
     *     // ... the filter for the ProviderMovements we want to count
     *   }
     * })
    **/
    count<T extends ProviderMovementCountArgs>(
      args?: Subset<T, ProviderMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderMovementAggregateArgs>(args: Subset<T, ProviderMovementAggregateArgs>): Prisma.PrismaPromise<GetProviderMovementAggregateType<T>>

    /**
     * Group by ProviderMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderMovementGroupByArgs} args - Group by arguments.
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
      T extends ProviderMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderMovementGroupByArgs['orderBy'] }
        : { orderBy?: ProviderMovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProviderMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderMovement model
   */
  readonly fields: ProviderMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProviderMovement model
   */ 
  interface ProviderMovementFieldRefs {
    readonly id: FieldRef<"ProviderMovement", 'Int'>
    readonly providerId: FieldRef<"ProviderMovement", 'Int'>
    readonly type: FieldRef<"ProviderMovement", 'String'>
    readonly amount: FieldRef<"ProviderMovement", 'Float'>
    readonly description: FieldRef<"ProviderMovement", 'String'>
    readonly imageUrl: FieldRef<"ProviderMovement", 'String'>
    readonly createdAt: FieldRef<"ProviderMovement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderMovement findUnique
   */
  export type ProviderMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderMovement
     */
    select?: ProviderMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderMovementInclude<ExtArgs> | null
    /**
     * Filter, which ProviderMovement to fetch.
     */
    where: ProviderMovementWhereUniqueInput
  }

  /**
   * ProviderMovement findUniqueOrThrow
   */
  export type ProviderMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderMovement
     */
    select?: ProviderMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderMovementInclude<ExtArgs> | null
    /**
     * Filter, which ProviderMovement to fetch.
     */
    where: ProviderMovementWhereUniqueInput
  }

  /**
   * ProviderMovement findFirst
   */
  export type ProviderMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderMovement
     */
    select?: ProviderMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderMovementInclude<ExtArgs> | null
    /**
     * Filter, which ProviderMovement to fetch.
     */
    where?: ProviderMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderMovements to fetch.
     */
    orderBy?: ProviderMovementOrderByWithRelationInput | ProviderMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderMovements.
     */
    cursor?: ProviderMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderMovements.
     */
    distinct?: ProviderMovementScalarFieldEnum | ProviderMovementScalarFieldEnum[]
  }

  /**
   * ProviderMovement findFirstOrThrow
   */
  export type ProviderMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderMovement
     */
    select?: ProviderMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderMovementInclude<ExtArgs> | null
    /**
     * Filter, which ProviderMovement to fetch.
     */
    where?: ProviderMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderMovements to fetch.
     */
    orderBy?: ProviderMovementOrderByWithRelationInput | ProviderMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderMovements.
     */
    cursor?: ProviderMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderMovements.
     */
    distinct?: ProviderMovementScalarFieldEnum | ProviderMovementScalarFieldEnum[]
  }

  /**
   * ProviderMovement findMany
   */
  export type ProviderMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderMovement
     */
    select?: ProviderMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderMovementInclude<ExtArgs> | null
    /**
     * Filter, which ProviderMovements to fetch.
     */
    where?: ProviderMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderMovements to fetch.
     */
    orderBy?: ProviderMovementOrderByWithRelationInput | ProviderMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderMovements.
     */
    cursor?: ProviderMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderMovements.
     */
    skip?: number
    distinct?: ProviderMovementScalarFieldEnum | ProviderMovementScalarFieldEnum[]
  }

  /**
   * ProviderMovement create
   */
  export type ProviderMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderMovement
     */
    select?: ProviderMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderMovement.
     */
    data: XOR<ProviderMovementCreateInput, ProviderMovementUncheckedCreateInput>
  }

  /**
   * ProviderMovement createMany
   */
  export type ProviderMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderMovements.
     */
    data: ProviderMovementCreateManyInput | ProviderMovementCreateManyInput[]
  }

  /**
   * ProviderMovement createManyAndReturn
   */
  export type ProviderMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderMovement
     */
    select?: ProviderMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProviderMovements.
     */
    data: ProviderMovementCreateManyInput | ProviderMovementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderMovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderMovement update
   */
  export type ProviderMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderMovement
     */
    select?: ProviderMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderMovement.
     */
    data: XOR<ProviderMovementUpdateInput, ProviderMovementUncheckedUpdateInput>
    /**
     * Choose, which ProviderMovement to update.
     */
    where: ProviderMovementWhereUniqueInput
  }

  /**
   * ProviderMovement updateMany
   */
  export type ProviderMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderMovements.
     */
    data: XOR<ProviderMovementUpdateManyMutationInput, ProviderMovementUncheckedUpdateManyInput>
    /**
     * Filter which ProviderMovements to update
     */
    where?: ProviderMovementWhereInput
  }

  /**
   * ProviderMovement upsert
   */
  export type ProviderMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderMovement
     */
    select?: ProviderMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderMovement to update in case it exists.
     */
    where: ProviderMovementWhereUniqueInput
    /**
     * In case the ProviderMovement found by the `where` argument doesn't exist, create a new ProviderMovement with this data.
     */
    create: XOR<ProviderMovementCreateInput, ProviderMovementUncheckedCreateInput>
    /**
     * In case the ProviderMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderMovementUpdateInput, ProviderMovementUncheckedUpdateInput>
  }

  /**
   * ProviderMovement delete
   */
  export type ProviderMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderMovement
     */
    select?: ProviderMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderMovementInclude<ExtArgs> | null
    /**
     * Filter which ProviderMovement to delete.
     */
    where: ProviderMovementWhereUniqueInput
  }

  /**
   * ProviderMovement deleteMany
   */
  export type ProviderMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderMovements to delete
     */
    where?: ProviderMovementWhereInput
  }

  /**
   * ProviderMovement without action
   */
  export type ProviderMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderMovement
     */
    select?: ProviderMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderMovementInclude<ExtArgs> | null
  }


  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessAvgAggregateOutputType = {
    id: number | null
    taxPercentage: number | null
  }

  export type BusinessSumAggregateOutputType = {
    id: number | null
    taxPercentage: number | null
  }

  export type BusinessMinAggregateOutputType = {
    id: number | null
    type: string | null
    name: string | null
    nit: string | null
    address: string | null
    phone: string | null
    taxPercentage: number | null
    primaryColor: string | null
    secondaryColor: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: number | null
    type: string | null
    name: string | null
    nit: string | null
    address: string | null
    phone: string | null
    taxPercentage: number | null
    primaryColor: string | null
    secondaryColor: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    type: number
    name: number
    nit: number
    address: number
    phone: number
    taxPercentage: number
    primaryColor: number
    secondaryColor: number
    logoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessAvgAggregateInputType = {
    id?: true
    taxPercentage?: true
  }

  export type BusinessSumAggregateInputType = {
    id?: true
    taxPercentage?: true
  }

  export type BusinessMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    nit?: true
    address?: true
    phone?: true
    taxPercentage?: true
    primaryColor?: true
    secondaryColor?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    nit?: true
    address?: true
    phone?: true
    taxPercentage?: true
    primaryColor?: true
    secondaryColor?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    nit?: true
    address?: true
    phone?: true
    taxPercentage?: true
    primaryColor?: true
    secondaryColor?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _avg?: BusinessAvgAggregateInputType
    _sum?: BusinessSumAggregateInputType
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: number
    type: string
    name: string
    nit: string | null
    address: string | null
    phone: string | null
    taxPercentage: number
    primaryColor: string
    secondaryColor: string | null
    logoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    nit?: boolean
    address?: boolean
    phone?: boolean
    taxPercentage?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    nit?: boolean
    address?: boolean
    phone?: boolean
    taxPercentage?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    nit?: boolean
    address?: boolean
    phone?: boolean
    taxPercentage?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      name: string
      nit: string | null
      address: string | null
      phone: string | null
      taxPercentage: number
      primaryColor: string
      secondaryColor: string | null
      logoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
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
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Business model
   */ 
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'Int'>
    readonly type: FieldRef<"Business", 'String'>
    readonly name: FieldRef<"Business", 'String'>
    readonly nit: FieldRef<"Business", 'String'>
    readonly address: FieldRef<"Business", 'String'>
    readonly phone: FieldRef<"Business", 'String'>
    readonly taxPercentage: FieldRef<"Business", 'Float'>
    readonly primaryColor: FieldRef<"Business", 'String'>
    readonly secondaryColor: FieldRef<"Business", 'String'>
    readonly logoUrl: FieldRef<"Business", 'String'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
    readonly updatedAt: FieldRef<"Business", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
  }

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlertScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    alertTime: 'alertTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    repeatDay: 'repeatDay',
    repeatWeekly: 'repeatWeekly'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    quantity: 'quantity',
    typeUnity: 'typeUnity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    Origin: 'Origin',
    providerId: 'providerId'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    quantity: 'quantity',
    typeUnity: 'typeUnity',
    barcode: 'barcode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    category: 'category',
    rappi_price: 'rappi_price'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductIngredientScalarFieldEnum: {
    productId: 'productId',
    ingredientId: 'ingredientId',
    quantity: 'quantity',
    createdAt: 'createdAt'
  };

  export type ProductIngredientScalarFieldEnum = (typeof ProductIngredientScalarFieldEnum)[keyof typeof ProductIngredientScalarFieldEnum]


  export const ProviderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    accountNumber: 'accountNumber',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    totalAmount: 'totalAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    table: 'table',
    generalObservation: 'generalObservation',
    gameId: 'gameId',
    orderType: 'orderType',
    user: 'user',
    paymentType: 'paymentType',
    cashAmount: 'cashAmount',
    discountPercent: 'discountPercent'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const SaleProductScalarFieldEnum: {
    id: 'id',
    saleId: 'saleId',
    productId: 'productId',
    quantity: 'quantity',
    observation: 'observation'
  };

  export type SaleProductScalarFieldEnum = (typeof SaleProductScalarFieldEnum)[keyof typeof SaleProductScalarFieldEnum]


  export const SaleProductAdditionScalarFieldEnum: {
    id: 'id',
    saleProductId: 'saleProductId',
    name: 'name',
    price: 'price',
    additionId: 'additionId'
  };

  export type SaleProductAdditionScalarFieldEnum = (typeof SaleProductAdditionScalarFieldEnum)[keyof typeof SaleProductAdditionScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    endpoint: 'endpoint',
    expirationTime: 'expirationTime',
    keys: 'keys'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UtilsScalarFieldEnum: {
    id: 'id',
    ipv4: 'ipv4',
    created_at: 'created_at'
  };

  export type UtilsScalarFieldEnum = (typeof UtilsScalarFieldEnum)[keyof typeof UtilsScalarFieldEnum]


  export const ProviderMovementScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    type: 'type',
    amount: 'amount',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt'
  };

  export type ProviderMovementScalarFieldEnum = (typeof ProviderMovementScalarFieldEnum)[keyof typeof ProviderMovementScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    nit: 'nit',
    address: 'address',
    phone: 'phone',
    taxPercentage: 'taxPercentage',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    logoUrl: 'logoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: IntFilter<"Alert"> | number
    title?: StringFilter<"Alert"> | string
    description?: StringFilter<"Alert"> | string
    alertTime?: DateTimeFilter<"Alert"> | Date | string
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    repeatDay?: IntNullableFilter<"Alert"> | number | null
    repeatWeekly?: BoolFilter<"Alert"> | boolean
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    alertTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    repeatDay?: SortOrderInput | SortOrder
    repeatWeekly?: SortOrder
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    title?: StringFilter<"Alert"> | string
    description?: StringFilter<"Alert"> | string
    alertTime?: DateTimeFilter<"Alert"> | Date | string
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    repeatDay?: IntNullableFilter<"Alert"> | number | null
    repeatWeekly?: BoolFilter<"Alert"> | boolean
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    alertTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    repeatDay?: SortOrderInput | SortOrder
    repeatWeekly?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alert"> | number
    title?: StringWithAggregatesFilter<"Alert"> | string
    description?: StringWithAggregatesFilter<"Alert"> | string
    alertTime?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    repeatDay?: IntNullableWithAggregatesFilter<"Alert"> | number | null
    repeatWeekly?: BoolWithAggregatesFilter<"Alert"> | boolean
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: IntFilter<"Game"> | number
    name?: StringFilter<"Game"> | string
    sales?: SaleListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sales?: SaleOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    sales?: SaleListRelationFilter
  }, "id" | "name">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Game"> | number
    name?: StringWithAggregatesFilter<"Game"> | string
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: IntFilter<"Ingredient"> | number
    name?: StringFilter<"Ingredient"> | string
    description?: StringNullableFilter<"Ingredient"> | string | null
    price?: IntFilter<"Ingredient"> | number
    quantity?: FloatNullableFilter<"Ingredient"> | number | null
    typeUnity?: StringFilter<"Ingredient"> | string
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
    Origin?: StringFilter<"Ingredient"> | string
    providerId?: IntNullableFilter<"Ingredient"> | number | null
    provider?: XOR<ProviderNullableRelationFilter, ProviderWhereInput> | null
    products?: ProductIngredientListRelationFilter
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrderInput | SortOrder
    typeUnity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Origin?: SortOrder
    providerId?: SortOrderInput | SortOrder
    provider?: ProviderOrderByWithRelationInput
    products?: ProductIngredientOrderByRelationAggregateInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    name?: StringFilter<"Ingredient"> | string
    description?: StringNullableFilter<"Ingredient"> | string | null
    price?: IntFilter<"Ingredient"> | number
    quantity?: FloatNullableFilter<"Ingredient"> | number | null
    typeUnity?: StringFilter<"Ingredient"> | string
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
    Origin?: StringFilter<"Ingredient"> | string
    providerId?: IntNullableFilter<"Ingredient"> | number | null
    provider?: XOR<ProviderNullableRelationFilter, ProviderWhereInput> | null
    products?: ProductIngredientListRelationFilter
  }, "id">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrderInput | SortOrder
    typeUnity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Origin?: SortOrder
    providerId?: SortOrderInput | SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingredient"> | number
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    description?: StringNullableWithAggregatesFilter<"Ingredient"> | string | null
    price?: IntWithAggregatesFilter<"Ingredient"> | number
    quantity?: FloatNullableWithAggregatesFilter<"Ingredient"> | number | null
    typeUnity?: StringWithAggregatesFilter<"Ingredient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
    Origin?: StringWithAggregatesFilter<"Ingredient"> | string
    providerId?: IntNullableWithAggregatesFilter<"Ingredient"> | number | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    quantity?: FloatNullableFilter<"Product"> | number | null
    typeUnity?: StringNullableFilter<"Product"> | string | null
    barcode?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: StringFilter<"Product"> | string
    rappi_price?: FloatNullableFilter<"Product"> | number | null
    ingredients?: ProductIngredientListRelationFilter
    sales?: SaleProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrderInput | SortOrder
    typeUnity?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    rappi_price?: SortOrderInput | SortOrder
    ingredients?: ProductIngredientOrderByRelationAggregateInput
    sales?: SaleProductOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    quantity?: FloatNullableFilter<"Product"> | number | null
    typeUnity?: StringNullableFilter<"Product"> | string | null
    barcode?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: StringFilter<"Product"> | string
    rappi_price?: FloatNullableFilter<"Product"> | number | null
    ingredients?: ProductIngredientListRelationFilter
    sales?: SaleProductListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrderInput | SortOrder
    typeUnity?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    rappi_price?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: FloatWithAggregatesFilter<"Product"> | number
    quantity?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    typeUnity?: StringNullableWithAggregatesFilter<"Product"> | string | null
    barcode?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    category?: StringWithAggregatesFilter<"Product"> | string
    rappi_price?: FloatNullableWithAggregatesFilter<"Product"> | number | null
  }

  export type ProductIngredientWhereInput = {
    AND?: ProductIngredientWhereInput | ProductIngredientWhereInput[]
    OR?: ProductIngredientWhereInput[]
    NOT?: ProductIngredientWhereInput | ProductIngredientWhereInput[]
    productId?: IntFilter<"ProductIngredient"> | number
    ingredientId?: IntFilter<"ProductIngredient"> | number
    quantity?: IntFilter<"ProductIngredient"> | number
    createdAt?: DateTimeFilter<"ProductIngredient"> | Date | string
    ingredient?: XOR<IngredientRelationFilter, IngredientWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductIngredientOrderByWithRelationInput = {
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    ingredient?: IngredientOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ProductIngredientWhereUniqueInput = Prisma.AtLeast<{
    productId_ingredientId?: ProductIngredientProductIdIngredientIdCompoundUniqueInput
    AND?: ProductIngredientWhereInput | ProductIngredientWhereInput[]
    OR?: ProductIngredientWhereInput[]
    NOT?: ProductIngredientWhereInput | ProductIngredientWhereInput[]
    productId?: IntFilter<"ProductIngredient"> | number
    ingredientId?: IntFilter<"ProductIngredient"> | number
    quantity?: IntFilter<"ProductIngredient"> | number
    createdAt?: DateTimeFilter<"ProductIngredient"> | Date | string
    ingredient?: XOR<IngredientRelationFilter, IngredientWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "productId_ingredientId">

  export type ProductIngredientOrderByWithAggregationInput = {
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    _count?: ProductIngredientCountOrderByAggregateInput
    _avg?: ProductIngredientAvgOrderByAggregateInput
    _max?: ProductIngredientMaxOrderByAggregateInput
    _min?: ProductIngredientMinOrderByAggregateInput
    _sum?: ProductIngredientSumOrderByAggregateInput
  }

  export type ProductIngredientScalarWhereWithAggregatesInput = {
    AND?: ProductIngredientScalarWhereWithAggregatesInput | ProductIngredientScalarWhereWithAggregatesInput[]
    OR?: ProductIngredientScalarWhereWithAggregatesInput[]
    NOT?: ProductIngredientScalarWhereWithAggregatesInput | ProductIngredientScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"ProductIngredient"> | number
    ingredientId?: IntWithAggregatesFilter<"ProductIngredient"> | number
    quantity?: IntWithAggregatesFilter<"ProductIngredient"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductIngredient"> | Date | string
  }

  export type ProviderWhereInput = {
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    id?: IntFilter<"Provider"> | number
    name?: StringFilter<"Provider"> | string
    description?: StringNullableFilter<"Provider"> | string | null
    accountNumber?: StringFilter<"Provider"> | string
    phone?: StringNullableFilter<"Provider"> | string | null
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    ingredients?: IngredientListRelationFilter
    movements?: ProviderMovementListRelationFilter
  }

  export type ProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    accountNumber?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ingredients?: IngredientOrderByRelationAggregateInput
    movements?: ProviderMovementOrderByRelationAggregateInput
  }

  export type ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    name?: StringFilter<"Provider"> | string
    description?: StringNullableFilter<"Provider"> | string | null
    accountNumber?: StringFilter<"Provider"> | string
    phone?: StringNullableFilter<"Provider"> | string | null
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    ingredients?: IngredientListRelationFilter
    movements?: ProviderMovementListRelationFilter
  }, "id">

  export type ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    accountNumber?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _avg?: ProviderAvgOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
    _sum?: ProviderSumOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    OR?: ProviderScalarWhereWithAggregatesInput[]
    NOT?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Provider"> | number
    name?: StringWithAggregatesFilter<"Provider"> | string
    description?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    accountNumber?: StringWithAggregatesFilter<"Provider"> | string
    phone?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: IntFilter<"Sale"> | number
    totalAmount?: FloatFilter<"Sale"> | number
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
    status?: StringFilter<"Sale"> | string
    table?: StringFilter<"Sale"> | string
    generalObservation?: StringNullableFilter<"Sale"> | string | null
    gameId?: IntNullableFilter<"Sale"> | number | null
    orderType?: StringFilter<"Sale"> | string
    user?: StringFilter<"Sale"> | string
    paymentType?: StringNullableFilter<"Sale"> | string | null
    cashAmount?: FloatNullableFilter<"Sale"> | number | null
    discountPercent?: FloatNullableFilter<"Sale"> | number | null
    game?: XOR<GameNullableRelationFilter, GameWhereInput> | null
    products?: SaleProductListRelationFilter
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    table?: SortOrder
    generalObservation?: SortOrderInput | SortOrder
    gameId?: SortOrderInput | SortOrder
    orderType?: SortOrder
    user?: SortOrder
    paymentType?: SortOrderInput | SortOrder
    cashAmount?: SortOrderInput | SortOrder
    discountPercent?: SortOrderInput | SortOrder
    game?: GameOrderByWithRelationInput
    products?: SaleProductOrderByRelationAggregateInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    totalAmount?: FloatFilter<"Sale"> | number
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
    status?: StringFilter<"Sale"> | string
    table?: StringFilter<"Sale"> | string
    generalObservation?: StringNullableFilter<"Sale"> | string | null
    gameId?: IntNullableFilter<"Sale"> | number | null
    orderType?: StringFilter<"Sale"> | string
    user?: StringFilter<"Sale"> | string
    paymentType?: StringNullableFilter<"Sale"> | string | null
    cashAmount?: FloatNullableFilter<"Sale"> | number | null
    discountPercent?: FloatNullableFilter<"Sale"> | number | null
    game?: XOR<GameNullableRelationFilter, GameWhereInput> | null
    products?: SaleProductListRelationFilter
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    table?: SortOrder
    generalObservation?: SortOrderInput | SortOrder
    gameId?: SortOrderInput | SortOrder
    orderType?: SortOrder
    user?: SortOrder
    paymentType?: SortOrderInput | SortOrder
    cashAmount?: SortOrderInput | SortOrder
    discountPercent?: SortOrderInput | SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sale"> | number
    totalAmount?: FloatWithAggregatesFilter<"Sale"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    status?: StringWithAggregatesFilter<"Sale"> | string
    table?: StringWithAggregatesFilter<"Sale"> | string
    generalObservation?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    gameId?: IntNullableWithAggregatesFilter<"Sale"> | number | null
    orderType?: StringWithAggregatesFilter<"Sale"> | string
    user?: StringWithAggregatesFilter<"Sale"> | string
    paymentType?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    cashAmount?: FloatNullableWithAggregatesFilter<"Sale"> | number | null
    discountPercent?: FloatNullableWithAggregatesFilter<"Sale"> | number | null
  }

  export type SaleProductWhereInput = {
    AND?: SaleProductWhereInput | SaleProductWhereInput[]
    OR?: SaleProductWhereInput[]
    NOT?: SaleProductWhereInput | SaleProductWhereInput[]
    id?: StringFilter<"SaleProduct"> | string
    saleId?: IntFilter<"SaleProduct"> | number
    productId?: IntFilter<"SaleProduct"> | number
    quantity?: FloatFilter<"SaleProduct"> | number
    observation?: StringNullableFilter<"SaleProduct"> | string | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    sale?: XOR<SaleRelationFilter, SaleWhereInput>
    additions?: SaleProductAdditionListRelationFilter
  }

  export type SaleProductOrderByWithRelationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    observation?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    sale?: SaleOrderByWithRelationInput
    additions?: SaleProductAdditionOrderByRelationAggregateInput
  }

  export type SaleProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleProductWhereInput | SaleProductWhereInput[]
    OR?: SaleProductWhereInput[]
    NOT?: SaleProductWhereInput | SaleProductWhereInput[]
    saleId?: IntFilter<"SaleProduct"> | number
    productId?: IntFilter<"SaleProduct"> | number
    quantity?: FloatFilter<"SaleProduct"> | number
    observation?: StringNullableFilter<"SaleProduct"> | string | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    sale?: XOR<SaleRelationFilter, SaleWhereInput>
    additions?: SaleProductAdditionListRelationFilter
  }, "id">

  export type SaleProductOrderByWithAggregationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    observation?: SortOrderInput | SortOrder
    _count?: SaleProductCountOrderByAggregateInput
    _avg?: SaleProductAvgOrderByAggregateInput
    _max?: SaleProductMaxOrderByAggregateInput
    _min?: SaleProductMinOrderByAggregateInput
    _sum?: SaleProductSumOrderByAggregateInput
  }

  export type SaleProductScalarWhereWithAggregatesInput = {
    AND?: SaleProductScalarWhereWithAggregatesInput | SaleProductScalarWhereWithAggregatesInput[]
    OR?: SaleProductScalarWhereWithAggregatesInput[]
    NOT?: SaleProductScalarWhereWithAggregatesInput | SaleProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SaleProduct"> | string
    saleId?: IntWithAggregatesFilter<"SaleProduct"> | number
    productId?: IntWithAggregatesFilter<"SaleProduct"> | number
    quantity?: FloatWithAggregatesFilter<"SaleProduct"> | number
    observation?: StringNullableWithAggregatesFilter<"SaleProduct"> | string | null
  }

  export type SaleProductAdditionWhereInput = {
    AND?: SaleProductAdditionWhereInput | SaleProductAdditionWhereInput[]
    OR?: SaleProductAdditionWhereInput[]
    NOT?: SaleProductAdditionWhereInput | SaleProductAdditionWhereInput[]
    id?: IntFilter<"SaleProductAddition"> | number
    saleProductId?: StringFilter<"SaleProductAddition"> | string
    name?: StringFilter<"SaleProductAddition"> | string
    price?: FloatFilter<"SaleProductAddition"> | number
    additionId?: IntNullableFilter<"SaleProductAddition"> | number | null
    saleProduct?: XOR<SaleProductRelationFilter, SaleProductWhereInput>
  }

  export type SaleProductAdditionOrderByWithRelationInput = {
    id?: SortOrder
    saleProductId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    additionId?: SortOrderInput | SortOrder
    saleProduct?: SaleProductOrderByWithRelationInput
  }

  export type SaleProductAdditionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaleProductAdditionWhereInput | SaleProductAdditionWhereInput[]
    OR?: SaleProductAdditionWhereInput[]
    NOT?: SaleProductAdditionWhereInput | SaleProductAdditionWhereInput[]
    saleProductId?: StringFilter<"SaleProductAddition"> | string
    name?: StringFilter<"SaleProductAddition"> | string
    price?: FloatFilter<"SaleProductAddition"> | number
    additionId?: IntNullableFilter<"SaleProductAddition"> | number | null
    saleProduct?: XOR<SaleProductRelationFilter, SaleProductWhereInput>
  }, "id">

  export type SaleProductAdditionOrderByWithAggregationInput = {
    id?: SortOrder
    saleProductId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    additionId?: SortOrderInput | SortOrder
    _count?: SaleProductAdditionCountOrderByAggregateInput
    _avg?: SaleProductAdditionAvgOrderByAggregateInput
    _max?: SaleProductAdditionMaxOrderByAggregateInput
    _min?: SaleProductAdditionMinOrderByAggregateInput
    _sum?: SaleProductAdditionSumOrderByAggregateInput
  }

  export type SaleProductAdditionScalarWhereWithAggregatesInput = {
    AND?: SaleProductAdditionScalarWhereWithAggregatesInput | SaleProductAdditionScalarWhereWithAggregatesInput[]
    OR?: SaleProductAdditionScalarWhereWithAggregatesInput[]
    NOT?: SaleProductAdditionScalarWhereWithAggregatesInput | SaleProductAdditionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SaleProductAddition"> | number
    saleProductId?: StringWithAggregatesFilter<"SaleProductAddition"> | string
    name?: StringWithAggregatesFilter<"SaleProductAddition"> | string
    price?: FloatWithAggregatesFilter<"SaleProductAddition"> | number
    additionId?: IntNullableWithAggregatesFilter<"SaleProductAddition"> | number | null
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: IntFilter<"Subscription"> | number
    endpoint?: StringFilter<"Subscription"> | string
    expirationTime?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    keys?: StringFilter<"Subscription"> | string
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    endpoint?: SortOrder
    expirationTime?: SortOrderInput | SortOrder
    keys?: SortOrder
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    endpoint?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    expirationTime?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    keys?: StringFilter<"Subscription"> | string
  }, "id" | "endpoint">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    endpoint?: SortOrder
    expirationTime?: SortOrderInput | SortOrder
    keys?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscription"> | number
    endpoint?: StringWithAggregatesFilter<"Subscription"> | string
    expirationTime?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    keys?: StringWithAggregatesFilter<"Subscription"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: IntNullableFilter<"User"> | number | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: IntNullableFilter<"User"> | number | null
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type UtilsWhereInput = {
    AND?: UtilsWhereInput | UtilsWhereInput[]
    OR?: UtilsWhereInput[]
    NOT?: UtilsWhereInput | UtilsWhereInput[]
    id?: IntFilter<"Utils"> | number
    ipv4?: StringFilter<"Utils"> | string
    created_at?: DateTimeFilter<"Utils"> | Date | string
  }

  export type UtilsOrderByWithRelationInput = {
    id?: SortOrder
    ipv4?: SortOrder
    created_at?: SortOrder
  }

  export type UtilsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UtilsWhereInput | UtilsWhereInput[]
    OR?: UtilsWhereInput[]
    NOT?: UtilsWhereInput | UtilsWhereInput[]
    ipv4?: StringFilter<"Utils"> | string
    created_at?: DateTimeFilter<"Utils"> | Date | string
  }, "id">

  export type UtilsOrderByWithAggregationInput = {
    id?: SortOrder
    ipv4?: SortOrder
    created_at?: SortOrder
    _count?: UtilsCountOrderByAggregateInput
    _avg?: UtilsAvgOrderByAggregateInput
    _max?: UtilsMaxOrderByAggregateInput
    _min?: UtilsMinOrderByAggregateInput
    _sum?: UtilsSumOrderByAggregateInput
  }

  export type UtilsScalarWhereWithAggregatesInput = {
    AND?: UtilsScalarWhereWithAggregatesInput | UtilsScalarWhereWithAggregatesInput[]
    OR?: UtilsScalarWhereWithAggregatesInput[]
    NOT?: UtilsScalarWhereWithAggregatesInput | UtilsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Utils"> | number
    ipv4?: StringWithAggregatesFilter<"Utils"> | string
    created_at?: DateTimeWithAggregatesFilter<"Utils"> | Date | string
  }

  export type ProviderMovementWhereInput = {
    AND?: ProviderMovementWhereInput | ProviderMovementWhereInput[]
    OR?: ProviderMovementWhereInput[]
    NOT?: ProviderMovementWhereInput | ProviderMovementWhereInput[]
    id?: IntFilter<"ProviderMovement"> | number
    providerId?: IntFilter<"ProviderMovement"> | number
    type?: StringFilter<"ProviderMovement"> | string
    amount?: FloatFilter<"ProviderMovement"> | number
    description?: StringNullableFilter<"ProviderMovement"> | string | null
    imageUrl?: StringNullableFilter<"ProviderMovement"> | string | null
    createdAt?: DateTimeFilter<"ProviderMovement"> | Date | string
    provider?: XOR<ProviderRelationFilter, ProviderWhereInput>
  }

  export type ProviderMovementOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    provider?: ProviderOrderByWithRelationInput
  }

  export type ProviderMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProviderMovementWhereInput | ProviderMovementWhereInput[]
    OR?: ProviderMovementWhereInput[]
    NOT?: ProviderMovementWhereInput | ProviderMovementWhereInput[]
    providerId?: IntFilter<"ProviderMovement"> | number
    type?: StringFilter<"ProviderMovement"> | string
    amount?: FloatFilter<"ProviderMovement"> | number
    description?: StringNullableFilter<"ProviderMovement"> | string | null
    imageUrl?: StringNullableFilter<"ProviderMovement"> | string | null
    createdAt?: DateTimeFilter<"ProviderMovement"> | Date | string
    provider?: XOR<ProviderRelationFilter, ProviderWhereInput>
  }, "id">

  export type ProviderMovementOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProviderMovementCountOrderByAggregateInput
    _avg?: ProviderMovementAvgOrderByAggregateInput
    _max?: ProviderMovementMaxOrderByAggregateInput
    _min?: ProviderMovementMinOrderByAggregateInput
    _sum?: ProviderMovementSumOrderByAggregateInput
  }

  export type ProviderMovementScalarWhereWithAggregatesInput = {
    AND?: ProviderMovementScalarWhereWithAggregatesInput | ProviderMovementScalarWhereWithAggregatesInput[]
    OR?: ProviderMovementScalarWhereWithAggregatesInput[]
    NOT?: ProviderMovementScalarWhereWithAggregatesInput | ProviderMovementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProviderMovement"> | number
    providerId?: IntWithAggregatesFilter<"ProviderMovement"> | number
    type?: StringWithAggregatesFilter<"ProviderMovement"> | string
    amount?: FloatWithAggregatesFilter<"ProviderMovement"> | number
    description?: StringNullableWithAggregatesFilter<"ProviderMovement"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"ProviderMovement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProviderMovement"> | Date | string
  }

  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: IntFilter<"Business"> | number
    type?: StringFilter<"Business"> | string
    name?: StringFilter<"Business"> | string
    nit?: StringNullableFilter<"Business"> | string | null
    address?: StringNullableFilter<"Business"> | string | null
    phone?: StringNullableFilter<"Business"> | string | null
    taxPercentage?: FloatFilter<"Business"> | number
    primaryColor?: StringFilter<"Business"> | string
    secondaryColor?: StringNullableFilter<"Business"> | string | null
    logoUrl?: StringNullableFilter<"Business"> | string | null
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    nit?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    taxPercentage?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    type?: StringFilter<"Business"> | string
    name?: StringFilter<"Business"> | string
    nit?: StringNullableFilter<"Business"> | string | null
    address?: StringNullableFilter<"Business"> | string | null
    phone?: StringNullableFilter<"Business"> | string | null
    taxPercentage?: FloatFilter<"Business"> | number
    primaryColor?: StringFilter<"Business"> | string
    secondaryColor?: StringNullableFilter<"Business"> | string | null
    logoUrl?: StringNullableFilter<"Business"> | string | null
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
  }, "id">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    nit?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    taxPercentage?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _avg?: BusinessAvgOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
    _sum?: BusinessSumOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Business"> | number
    type?: StringWithAggregatesFilter<"Business"> | string
    name?: StringWithAggregatesFilter<"Business"> | string
    nit?: StringNullableWithAggregatesFilter<"Business"> | string | null
    address?: StringNullableWithAggregatesFilter<"Business"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Business"> | string | null
    taxPercentage?: FloatWithAggregatesFilter<"Business"> | number
    primaryColor?: StringWithAggregatesFilter<"Business"> | string
    secondaryColor?: StringNullableWithAggregatesFilter<"Business"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Business"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
  }

  export type AlertCreateInput = {
    title: string
    description: string
    alertTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    repeatDay?: number | null
    repeatWeekly?: boolean
  }

  export type AlertUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    alertTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    repeatDay?: number | null
    repeatWeekly?: boolean
  }

  export type AlertUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    alertTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repeatDay?: NullableIntFieldUpdateOperationsInput | number | null
    repeatWeekly?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    alertTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repeatDay?: NullableIntFieldUpdateOperationsInput | number | null
    repeatWeekly?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlertCreateManyInput = {
    id?: number
    title: string
    description: string
    alertTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    repeatDay?: number | null
    repeatWeekly?: boolean
  }

  export type AlertUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    alertTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repeatDay?: NullableIntFieldUpdateOperationsInput | number | null
    repeatWeekly?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    alertTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repeatDay?: NullableIntFieldUpdateOperationsInput | number | null
    repeatWeekly?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameCreateInput = {
    name: string
    sales?: SaleCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: number
    name: string
    sales?: SaleUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sales?: SaleUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sales?: SaleUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: number
    name: string
  }

  export type GameUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientCreateInput = {
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Origin?: string
    provider?: ProviderCreateNestedOneWithoutIngredientsInput
    products?: ProductIngredientCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Origin?: string
    providerId?: number | null
    products?: ProductIngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Origin?: StringFieldUpdateOperationsInput | string
    provider?: ProviderUpdateOneWithoutIngredientsNestedInput
    products?: ProductIngredientUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Origin?: StringFieldUpdateOperationsInput | string
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    products?: ProductIngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Origin?: string
    providerId?: number | null
  }

  export type IngredientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Origin?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Origin?: StringFieldUpdateOperationsInput | string
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateInput = {
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity?: string | null
    barcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string
    rappi_price?: number | null
    ingredients?: ProductIngredientCreateNestedManyWithoutProductInput
    sales?: SaleProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity?: string | null
    barcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string
    rappi_price?: number | null
    ingredients?: ProductIngredientUncheckedCreateNestedManyWithoutProductInput
    sales?: SaleProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    rappi_price?: NullableFloatFieldUpdateOperationsInput | number | null
    ingredients?: ProductIngredientUpdateManyWithoutProductNestedInput
    sales?: SaleProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    rappi_price?: NullableFloatFieldUpdateOperationsInput | number | null
    ingredients?: ProductIngredientUncheckedUpdateManyWithoutProductNestedInput
    sales?: SaleProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity?: string | null
    barcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string
    rappi_price?: number | null
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    rappi_price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    rappi_price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductIngredientCreateInput = {
    quantity: number
    createdAt?: Date | string
    ingredient: IngredientCreateNestedOneWithoutProductsInput
    product: ProductCreateNestedOneWithoutIngredientsInput
  }

  export type ProductIngredientUncheckedCreateInput = {
    productId: number
    ingredientId: number
    quantity: number
    createdAt?: Date | string
  }

  export type ProductIngredientUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredient?: IngredientUpdateOneRequiredWithoutProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type ProductIngredientUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductIngredientCreateManyInput = {
    productId: number
    ingredientId: number
    quantity: number
    createdAt?: Date | string
  }

  export type ProductIngredientUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductIngredientUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCreateInput = {
    name: string
    description?: string | null
    accountNumber: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: IngredientCreateNestedManyWithoutProviderInput
    movements?: ProviderMovementCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    accountNumber: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutProviderInput
    movements?: ProviderMovementUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUpdateManyWithoutProviderNestedInput
    movements?: ProviderMovementUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUncheckedUpdateManyWithoutProviderNestedInput
    movements?: ProviderMovementUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    accountNumber: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateInput = {
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    table: string
    generalObservation?: string | null
    orderType?: string
    user?: string
    paymentType?: string | null
    cashAmount?: number | null
    discountPercent?: number | null
    game?: GameCreateNestedOneWithoutSalesInput
    products?: SaleProductCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    id?: number
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    table: string
    generalObservation?: string | null
    gameId?: number | null
    orderType?: string
    user?: string
    paymentType?: string | null
    cashAmount?: number | null
    discountPercent?: number | null
    products?: SaleProductUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleUpdateInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    generalObservation?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    cashAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    game?: GameUpdateOneWithoutSalesNestedInput
    products?: SaleProductUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    generalObservation?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: NullableIntFieldUpdateOperationsInput | number | null
    orderType?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    cashAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    products?: SaleProductUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleCreateManyInput = {
    id?: number
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    table: string
    generalObservation?: string | null
    gameId?: number | null
    orderType?: string
    user?: string
    paymentType?: string | null
    cashAmount?: number | null
    discountPercent?: number | null
  }

  export type SaleUpdateManyMutationInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    generalObservation?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    cashAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    generalObservation?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: NullableIntFieldUpdateOperationsInput | number | null
    orderType?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    cashAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SaleProductCreateInput = {
    id?: string
    quantity: number
    observation?: string | null
    product: ProductCreateNestedOneWithoutSalesInput
    sale: SaleCreateNestedOneWithoutProductsInput
    additions?: SaleProductAdditionCreateNestedManyWithoutSaleProductInput
  }

  export type SaleProductUncheckedCreateInput = {
    id?: string
    saleId: number
    productId: number
    quantity: number
    observation?: string | null
    additions?: SaleProductAdditionUncheckedCreateNestedManyWithoutSaleProductInput
  }

  export type SaleProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutSalesNestedInput
    sale?: SaleUpdateOneRequiredWithoutProductsNestedInput
    additions?: SaleProductAdditionUpdateManyWithoutSaleProductNestedInput
  }

  export type SaleProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    additions?: SaleProductAdditionUncheckedUpdateManyWithoutSaleProductNestedInput
  }

  export type SaleProductCreateManyInput = {
    id?: string
    saleId: number
    productId: number
    quantity: number
    observation?: string | null
  }

  export type SaleProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleProductAdditionCreateInput = {
    name: string
    price: number
    additionId?: number | null
    saleProduct: SaleProductCreateNestedOneWithoutAdditionsInput
  }

  export type SaleProductAdditionUncheckedCreateInput = {
    id?: number
    saleProductId: string
    name: string
    price: number
    additionId?: number | null
  }

  export type SaleProductAdditionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    additionId?: NullableIntFieldUpdateOperationsInput | number | null
    saleProduct?: SaleProductUpdateOneRequiredWithoutAdditionsNestedInput
  }

  export type SaleProductAdditionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleProductId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    additionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SaleProductAdditionCreateManyInput = {
    id?: number
    saleProductId: string
    name: string
    price: number
    additionId?: number | null
  }

  export type SaleProductAdditionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    additionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SaleProductAdditionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleProductId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    additionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubscriptionCreateInput = {
    endpoint: string
    expirationTime?: Date | string | null
    keys: string
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: number
    endpoint: string
    expirationTime?: Date | string | null
    keys: string
  }

  export type SubscriptionUpdateInput = {
    endpoint?: StringFieldUpdateOperationsInput | string
    expirationTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keys?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    expirationTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keys?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionCreateManyInput = {
    id?: number
    endpoint: string
    expirationTime?: Date | string | null
    keys: string
  }

  export type SubscriptionUpdateManyMutationInput = {
    endpoint?: StringFieldUpdateOperationsInput | string
    expirationTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keys?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    expirationTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keys?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: number | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: number | null
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: number | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UtilsCreateInput = {
    ipv4: string
    created_at?: Date | string
  }

  export type UtilsUncheckedCreateInput = {
    id?: number
    ipv4: string
    created_at?: Date | string
  }

  export type UtilsUpdateInput = {
    ipv4?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ipv4?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilsCreateManyInput = {
    id?: number
    ipv4: string
    created_at?: Date | string
  }

  export type UtilsUpdateManyMutationInput = {
    ipv4?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ipv4?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderMovementCreateInput = {
    type: string
    amount: number
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    provider: ProviderCreateNestedOneWithoutMovementsInput
  }

  export type ProviderMovementUncheckedCreateInput = {
    id?: number
    providerId: number
    type: string
    amount: number
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ProviderMovementUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutMovementsNestedInput
  }

  export type ProviderMovementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderMovementCreateManyInput = {
    id?: number
    providerId: number
    type: string
    amount: number
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ProviderMovementUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderMovementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessCreateInput = {
    type: string
    name: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    taxPercentage?: number
    primaryColor?: string
    secondaryColor?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessUncheckedCreateInput = {
    id?: number
    type: string
    name: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    taxPercentage?: number
    primaryColor?: string
    secondaryColor?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercentage?: FloatFieldUpdateOperationsInput | number
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercentage?: FloatFieldUpdateOperationsInput | number
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessCreateManyInput = {
    id?: number
    type: string
    name: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    taxPercentage?: number
    primaryColor?: string
    secondaryColor?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercentage?: FloatFieldUpdateOperationsInput | number
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    taxPercentage?: FloatFieldUpdateOperationsInput | number
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    alertTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    repeatDay?: SortOrder
    repeatWeekly?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    id?: SortOrder
    repeatDay?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    alertTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    repeatDay?: SortOrder
    repeatWeekly?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    alertTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    repeatDay?: SortOrder
    repeatWeekly?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    id?: SortOrder
    repeatDay?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProviderNullableRelationFilter = {
    is?: ProviderWhereInput | null
    isNot?: ProviderWhereInput | null
  }

  export type ProductIngredientListRelationFilter = {
    every?: ProductIngredientWhereInput
    some?: ProductIngredientWhereInput
    none?: ProductIngredientWhereInput
  }

  export type ProductIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    typeUnity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Origin?: SortOrder
    providerId?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    providerId?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    typeUnity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Origin?: SortOrder
    providerId?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    typeUnity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Origin?: SortOrder
    providerId?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    providerId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SaleProductListRelationFilter = {
    every?: SaleProductWhereInput
    some?: SaleProductWhereInput
    none?: SaleProductWhereInput
  }

  export type SaleProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    typeUnity?: SortOrder
    barcode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    rappi_price?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    rappi_price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    typeUnity?: SortOrder
    barcode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    rappi_price?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    typeUnity?: SortOrder
    barcode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    rappi_price?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    rappi_price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IngredientRelationFilter = {
    is?: IngredientWhereInput
    isNot?: IngredientWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductIngredientProductIdIngredientIdCompoundUniqueInput = {
    productId: number
    ingredientId: number
  }

  export type ProductIngredientCountOrderByAggregateInput = {
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductIngredientAvgOrderByAggregateInput = {
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductIngredientMaxOrderByAggregateInput = {
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductIngredientMinOrderByAggregateInput = {
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductIngredientSumOrderByAggregateInput = {
    productId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type IngredientListRelationFilter = {
    every?: IngredientWhereInput
    some?: IngredientWhereInput
    none?: IngredientWhereInput
  }

  export type ProviderMovementListRelationFilter = {
    every?: ProviderMovementWhereInput
    some?: ProviderMovementWhereInput
    none?: ProviderMovementWhereInput
  }

  export type IngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderMovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    accountNumber?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    accountNumber?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    accountNumber?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GameNullableRelationFilter = {
    is?: GameWhereInput | null
    isNot?: GameWhereInput | null
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    table?: SortOrder
    generalObservation?: SortOrder
    gameId?: SortOrder
    orderType?: SortOrder
    user?: SortOrder
    paymentType?: SortOrder
    cashAmount?: SortOrder
    discountPercent?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    gameId?: SortOrder
    cashAmount?: SortOrder
    discountPercent?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    table?: SortOrder
    generalObservation?: SortOrder
    gameId?: SortOrder
    orderType?: SortOrder
    user?: SortOrder
    paymentType?: SortOrder
    cashAmount?: SortOrder
    discountPercent?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    table?: SortOrder
    generalObservation?: SortOrder
    gameId?: SortOrder
    orderType?: SortOrder
    user?: SortOrder
    paymentType?: SortOrder
    cashAmount?: SortOrder
    discountPercent?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    gameId?: SortOrder
    cashAmount?: SortOrder
    discountPercent?: SortOrder
  }

  export type SaleRelationFilter = {
    is?: SaleWhereInput
    isNot?: SaleWhereInput
  }

  export type SaleProductAdditionListRelationFilter = {
    every?: SaleProductAdditionWhereInput
    some?: SaleProductAdditionWhereInput
    none?: SaleProductAdditionWhereInput
  }

  export type SaleProductAdditionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleProductCountOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    observation?: SortOrder
  }

  export type SaleProductAvgOrderByAggregateInput = {
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type SaleProductMaxOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    observation?: SortOrder
  }

  export type SaleProductMinOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    observation?: SortOrder
  }

  export type SaleProductSumOrderByAggregateInput = {
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type SaleProductRelationFilter = {
    is?: SaleProductWhereInput
    isNot?: SaleProductWhereInput
  }

  export type SaleProductAdditionCountOrderByAggregateInput = {
    id?: SortOrder
    saleProductId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    additionId?: SortOrder
  }

  export type SaleProductAdditionAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    additionId?: SortOrder
  }

  export type SaleProductAdditionMaxOrderByAggregateInput = {
    id?: SortOrder
    saleProductId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    additionId?: SortOrder
  }

  export type SaleProductAdditionMinOrderByAggregateInput = {
    id?: SortOrder
    saleProductId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    additionId?: SortOrder
  }

  export type SaleProductAdditionSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    additionId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    endpoint?: SortOrder
    expirationTime?: SortOrder
    keys?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    endpoint?: SortOrder
    expirationTime?: SortOrder
    keys?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    endpoint?: SortOrder
    expirationTime?: SortOrder
    keys?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type UtilsCountOrderByAggregateInput = {
    id?: SortOrder
    ipv4?: SortOrder
    created_at?: SortOrder
  }

  export type UtilsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UtilsMaxOrderByAggregateInput = {
    id?: SortOrder
    ipv4?: SortOrder
    created_at?: SortOrder
  }

  export type UtilsMinOrderByAggregateInput = {
    id?: SortOrder
    ipv4?: SortOrder
    created_at?: SortOrder
  }

  export type UtilsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProviderRelationFilter = {
    is?: ProviderWhereInput
    isNot?: ProviderWhereInput
  }

  export type ProviderMovementCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderMovementAvgOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    amount?: SortOrder
  }

  export type ProviderMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderMovementMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderMovementSumOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    amount?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    nit?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    taxPercentage?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessAvgOrderByAggregateInput = {
    id?: SortOrder
    taxPercentage?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    nit?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    taxPercentage?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    nit?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    taxPercentage?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessSumOrderByAggregateInput = {
    id?: SortOrder
    taxPercentage?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SaleCreateNestedManyWithoutGameInput = {
    create?: XOR<SaleCreateWithoutGameInput, SaleUncheckedCreateWithoutGameInput> | SaleCreateWithoutGameInput[] | SaleUncheckedCreateWithoutGameInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutGameInput | SaleCreateOrConnectWithoutGameInput[]
    createMany?: SaleCreateManyGameInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<SaleCreateWithoutGameInput, SaleUncheckedCreateWithoutGameInput> | SaleCreateWithoutGameInput[] | SaleUncheckedCreateWithoutGameInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutGameInput | SaleCreateOrConnectWithoutGameInput[]
    createMany?: SaleCreateManyGameInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUpdateManyWithoutGameNestedInput = {
    create?: XOR<SaleCreateWithoutGameInput, SaleUncheckedCreateWithoutGameInput> | SaleCreateWithoutGameInput[] | SaleUncheckedCreateWithoutGameInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutGameInput | SaleCreateOrConnectWithoutGameInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutGameInput | SaleUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: SaleCreateManyGameInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutGameInput | SaleUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutGameInput | SaleUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<SaleCreateWithoutGameInput, SaleUncheckedCreateWithoutGameInput> | SaleCreateWithoutGameInput[] | SaleUncheckedCreateWithoutGameInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutGameInput | SaleCreateOrConnectWithoutGameInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutGameInput | SaleUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: SaleCreateManyGameInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutGameInput | SaleUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutGameInput | SaleUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type ProviderCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<ProviderCreateWithoutIngredientsInput, ProviderUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutIngredientsInput
    connect?: ProviderWhereUniqueInput
  }

  export type ProductIngredientCreateNestedManyWithoutIngredientInput = {
    create?: XOR<ProductIngredientCreateWithoutIngredientInput, ProductIngredientUncheckedCreateWithoutIngredientInput> | ProductIngredientCreateWithoutIngredientInput[] | ProductIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ProductIngredientCreateOrConnectWithoutIngredientInput | ProductIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: ProductIngredientCreateManyIngredientInputEnvelope
    connect?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
  }

  export type ProductIngredientUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<ProductIngredientCreateWithoutIngredientInput, ProductIngredientUncheckedCreateWithoutIngredientInput> | ProductIngredientCreateWithoutIngredientInput[] | ProductIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ProductIngredientCreateOrConnectWithoutIngredientInput | ProductIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: ProductIngredientCreateManyIngredientInputEnvelope
    connect?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
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

  export type ProviderUpdateOneWithoutIngredientsNestedInput = {
    create?: XOR<ProviderCreateWithoutIngredientsInput, ProviderUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutIngredientsInput
    upsert?: ProviderUpsertWithoutIngredientsInput
    disconnect?: ProviderWhereInput | boolean
    delete?: ProviderWhereInput | boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutIngredientsInput, ProviderUpdateWithoutIngredientsInput>, ProviderUncheckedUpdateWithoutIngredientsInput>
  }

  export type ProductIngredientUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<ProductIngredientCreateWithoutIngredientInput, ProductIngredientUncheckedCreateWithoutIngredientInput> | ProductIngredientCreateWithoutIngredientInput[] | ProductIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ProductIngredientCreateOrConnectWithoutIngredientInput | ProductIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: ProductIngredientUpsertWithWhereUniqueWithoutIngredientInput | ProductIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: ProductIngredientCreateManyIngredientInputEnvelope
    set?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    disconnect?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    delete?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    connect?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    update?: ProductIngredientUpdateWithWhereUniqueWithoutIngredientInput | ProductIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: ProductIngredientUpdateManyWithWhereWithoutIngredientInput | ProductIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: ProductIngredientScalarWhereInput | ProductIngredientScalarWhereInput[]
  }

  export type ProductIngredientUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<ProductIngredientCreateWithoutIngredientInput, ProductIngredientUncheckedCreateWithoutIngredientInput> | ProductIngredientCreateWithoutIngredientInput[] | ProductIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ProductIngredientCreateOrConnectWithoutIngredientInput | ProductIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: ProductIngredientUpsertWithWhereUniqueWithoutIngredientInput | ProductIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: ProductIngredientCreateManyIngredientInputEnvelope
    set?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    disconnect?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    delete?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    connect?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    update?: ProductIngredientUpdateWithWhereUniqueWithoutIngredientInput | ProductIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: ProductIngredientUpdateManyWithWhereWithoutIngredientInput | ProductIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: ProductIngredientScalarWhereInput | ProductIngredientScalarWhereInput[]
  }

  export type ProductIngredientCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductIngredientCreateWithoutProductInput, ProductIngredientUncheckedCreateWithoutProductInput> | ProductIngredientCreateWithoutProductInput[] | ProductIngredientUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductIngredientCreateOrConnectWithoutProductInput | ProductIngredientCreateOrConnectWithoutProductInput[]
    createMany?: ProductIngredientCreateManyProductInputEnvelope
    connect?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
  }

  export type SaleProductCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleProductCreateWithoutProductInput, SaleProductUncheckedCreateWithoutProductInput> | SaleProductCreateWithoutProductInput[] | SaleProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleProductCreateOrConnectWithoutProductInput | SaleProductCreateOrConnectWithoutProductInput[]
    createMany?: SaleProductCreateManyProductInputEnvelope
    connect?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
  }

  export type ProductIngredientUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductIngredientCreateWithoutProductInput, ProductIngredientUncheckedCreateWithoutProductInput> | ProductIngredientCreateWithoutProductInput[] | ProductIngredientUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductIngredientCreateOrConnectWithoutProductInput | ProductIngredientCreateOrConnectWithoutProductInput[]
    createMany?: ProductIngredientCreateManyProductInputEnvelope
    connect?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
  }

  export type SaleProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleProductCreateWithoutProductInput, SaleProductUncheckedCreateWithoutProductInput> | SaleProductCreateWithoutProductInput[] | SaleProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleProductCreateOrConnectWithoutProductInput | SaleProductCreateOrConnectWithoutProductInput[]
    createMany?: SaleProductCreateManyProductInputEnvelope
    connect?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductIngredientUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductIngredientCreateWithoutProductInput, ProductIngredientUncheckedCreateWithoutProductInput> | ProductIngredientCreateWithoutProductInput[] | ProductIngredientUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductIngredientCreateOrConnectWithoutProductInput | ProductIngredientCreateOrConnectWithoutProductInput[]
    upsert?: ProductIngredientUpsertWithWhereUniqueWithoutProductInput | ProductIngredientUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductIngredientCreateManyProductInputEnvelope
    set?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    disconnect?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    delete?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    connect?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    update?: ProductIngredientUpdateWithWhereUniqueWithoutProductInput | ProductIngredientUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductIngredientUpdateManyWithWhereWithoutProductInput | ProductIngredientUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductIngredientScalarWhereInput | ProductIngredientScalarWhereInput[]
  }

  export type SaleProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleProductCreateWithoutProductInput, SaleProductUncheckedCreateWithoutProductInput> | SaleProductCreateWithoutProductInput[] | SaleProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleProductCreateOrConnectWithoutProductInput | SaleProductCreateOrConnectWithoutProductInput[]
    upsert?: SaleProductUpsertWithWhereUniqueWithoutProductInput | SaleProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleProductCreateManyProductInputEnvelope
    set?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    disconnect?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    delete?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    connect?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    update?: SaleProductUpdateWithWhereUniqueWithoutProductInput | SaleProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleProductUpdateManyWithWhereWithoutProductInput | SaleProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleProductScalarWhereInput | SaleProductScalarWhereInput[]
  }

  export type ProductIngredientUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductIngredientCreateWithoutProductInput, ProductIngredientUncheckedCreateWithoutProductInput> | ProductIngredientCreateWithoutProductInput[] | ProductIngredientUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductIngredientCreateOrConnectWithoutProductInput | ProductIngredientCreateOrConnectWithoutProductInput[]
    upsert?: ProductIngredientUpsertWithWhereUniqueWithoutProductInput | ProductIngredientUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductIngredientCreateManyProductInputEnvelope
    set?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    disconnect?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    delete?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    connect?: ProductIngredientWhereUniqueInput | ProductIngredientWhereUniqueInput[]
    update?: ProductIngredientUpdateWithWhereUniqueWithoutProductInput | ProductIngredientUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductIngredientUpdateManyWithWhereWithoutProductInput | ProductIngredientUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductIngredientScalarWhereInput | ProductIngredientScalarWhereInput[]
  }

  export type SaleProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleProductCreateWithoutProductInput, SaleProductUncheckedCreateWithoutProductInput> | SaleProductCreateWithoutProductInput[] | SaleProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleProductCreateOrConnectWithoutProductInput | SaleProductCreateOrConnectWithoutProductInput[]
    upsert?: SaleProductUpsertWithWhereUniqueWithoutProductInput | SaleProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleProductCreateManyProductInputEnvelope
    set?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    disconnect?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    delete?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    connect?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    update?: SaleProductUpdateWithWhereUniqueWithoutProductInput | SaleProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleProductUpdateManyWithWhereWithoutProductInput | SaleProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleProductScalarWhereInput | SaleProductScalarWhereInput[]
  }

  export type IngredientCreateNestedOneWithoutProductsInput = {
    create?: XOR<IngredientCreateWithoutProductsInput, IngredientUncheckedCreateWithoutProductsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutProductsInput
    connect?: IngredientWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<ProductCreateWithoutIngredientsInput, ProductUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutIngredientsInput
    connect?: ProductWhereUniqueInput
  }

  export type IngredientUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<IngredientCreateWithoutProductsInput, IngredientUncheckedCreateWithoutProductsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutProductsInput
    upsert?: IngredientUpsertWithoutProductsInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutProductsInput, IngredientUpdateWithoutProductsInput>, IngredientUncheckedUpdateWithoutProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<ProductCreateWithoutIngredientsInput, ProductUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutIngredientsInput
    upsert?: ProductUpsertWithoutIngredientsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutIngredientsInput, ProductUpdateWithoutIngredientsInput>, ProductUncheckedUpdateWithoutIngredientsInput>
  }

  export type IngredientCreateNestedManyWithoutProviderInput = {
    create?: XOR<IngredientCreateWithoutProviderInput, IngredientUncheckedCreateWithoutProviderInput> | IngredientCreateWithoutProviderInput[] | IngredientUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutProviderInput | IngredientCreateOrConnectWithoutProviderInput[]
    createMany?: IngredientCreateManyProviderInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type ProviderMovementCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderMovementCreateWithoutProviderInput, ProviderMovementUncheckedCreateWithoutProviderInput> | ProviderMovementCreateWithoutProviderInput[] | ProviderMovementUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderMovementCreateOrConnectWithoutProviderInput | ProviderMovementCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderMovementCreateManyProviderInputEnvelope
    connect?: ProviderMovementWhereUniqueInput | ProviderMovementWhereUniqueInput[]
  }

  export type IngredientUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<IngredientCreateWithoutProviderInput, IngredientUncheckedCreateWithoutProviderInput> | IngredientCreateWithoutProviderInput[] | IngredientUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutProviderInput | IngredientCreateOrConnectWithoutProviderInput[]
    createMany?: IngredientCreateManyProviderInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type ProviderMovementUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderMovementCreateWithoutProviderInput, ProviderMovementUncheckedCreateWithoutProviderInput> | ProviderMovementCreateWithoutProviderInput[] | ProviderMovementUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderMovementCreateOrConnectWithoutProviderInput | ProviderMovementCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderMovementCreateManyProviderInputEnvelope
    connect?: ProviderMovementWhereUniqueInput | ProviderMovementWhereUniqueInput[]
  }

  export type IngredientUpdateManyWithoutProviderNestedInput = {
    create?: XOR<IngredientCreateWithoutProviderInput, IngredientUncheckedCreateWithoutProviderInput> | IngredientCreateWithoutProviderInput[] | IngredientUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutProviderInput | IngredientCreateOrConnectWithoutProviderInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutProviderInput | IngredientUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: IngredientCreateManyProviderInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutProviderInput | IngredientUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutProviderInput | IngredientUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type ProviderMovementUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderMovementCreateWithoutProviderInput, ProviderMovementUncheckedCreateWithoutProviderInput> | ProviderMovementCreateWithoutProviderInput[] | ProviderMovementUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderMovementCreateOrConnectWithoutProviderInput | ProviderMovementCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderMovementUpsertWithWhereUniqueWithoutProviderInput | ProviderMovementUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderMovementCreateManyProviderInputEnvelope
    set?: ProviderMovementWhereUniqueInput | ProviderMovementWhereUniqueInput[]
    disconnect?: ProviderMovementWhereUniqueInput | ProviderMovementWhereUniqueInput[]
    delete?: ProviderMovementWhereUniqueInput | ProviderMovementWhereUniqueInput[]
    connect?: ProviderMovementWhereUniqueInput | ProviderMovementWhereUniqueInput[]
    update?: ProviderMovementUpdateWithWhereUniqueWithoutProviderInput | ProviderMovementUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderMovementUpdateManyWithWhereWithoutProviderInput | ProviderMovementUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderMovementScalarWhereInput | ProviderMovementScalarWhereInput[]
  }

  export type IngredientUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<IngredientCreateWithoutProviderInput, IngredientUncheckedCreateWithoutProviderInput> | IngredientCreateWithoutProviderInput[] | IngredientUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutProviderInput | IngredientCreateOrConnectWithoutProviderInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutProviderInput | IngredientUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: IngredientCreateManyProviderInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutProviderInput | IngredientUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutProviderInput | IngredientUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type ProviderMovementUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderMovementCreateWithoutProviderInput, ProviderMovementUncheckedCreateWithoutProviderInput> | ProviderMovementCreateWithoutProviderInput[] | ProviderMovementUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderMovementCreateOrConnectWithoutProviderInput | ProviderMovementCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderMovementUpsertWithWhereUniqueWithoutProviderInput | ProviderMovementUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderMovementCreateManyProviderInputEnvelope
    set?: ProviderMovementWhereUniqueInput | ProviderMovementWhereUniqueInput[]
    disconnect?: ProviderMovementWhereUniqueInput | ProviderMovementWhereUniqueInput[]
    delete?: ProviderMovementWhereUniqueInput | ProviderMovementWhereUniqueInput[]
    connect?: ProviderMovementWhereUniqueInput | ProviderMovementWhereUniqueInput[]
    update?: ProviderMovementUpdateWithWhereUniqueWithoutProviderInput | ProviderMovementUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderMovementUpdateManyWithWhereWithoutProviderInput | ProviderMovementUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderMovementScalarWhereInput | ProviderMovementScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutSalesInput = {
    create?: XOR<GameCreateWithoutSalesInput, GameUncheckedCreateWithoutSalesInput>
    connectOrCreate?: GameCreateOrConnectWithoutSalesInput
    connect?: GameWhereUniqueInput
  }

  export type SaleProductCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleProductCreateWithoutSaleInput, SaleProductUncheckedCreateWithoutSaleInput> | SaleProductCreateWithoutSaleInput[] | SaleProductUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleProductCreateOrConnectWithoutSaleInput | SaleProductCreateOrConnectWithoutSaleInput[]
    createMany?: SaleProductCreateManySaleInputEnvelope
    connect?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
  }

  export type SaleProductUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleProductCreateWithoutSaleInput, SaleProductUncheckedCreateWithoutSaleInput> | SaleProductCreateWithoutSaleInput[] | SaleProductUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleProductCreateOrConnectWithoutSaleInput | SaleProductCreateOrConnectWithoutSaleInput[]
    createMany?: SaleProductCreateManySaleInputEnvelope
    connect?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
  }

  export type GameUpdateOneWithoutSalesNestedInput = {
    create?: XOR<GameCreateWithoutSalesInput, GameUncheckedCreateWithoutSalesInput>
    connectOrCreate?: GameCreateOrConnectWithoutSalesInput
    upsert?: GameUpsertWithoutSalesInput
    disconnect?: GameWhereInput | boolean
    delete?: GameWhereInput | boolean
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutSalesInput, GameUpdateWithoutSalesInput>, GameUncheckedUpdateWithoutSalesInput>
  }

  export type SaleProductUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleProductCreateWithoutSaleInput, SaleProductUncheckedCreateWithoutSaleInput> | SaleProductCreateWithoutSaleInput[] | SaleProductUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleProductCreateOrConnectWithoutSaleInput | SaleProductCreateOrConnectWithoutSaleInput[]
    upsert?: SaleProductUpsertWithWhereUniqueWithoutSaleInput | SaleProductUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleProductCreateManySaleInputEnvelope
    set?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    disconnect?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    delete?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    connect?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    update?: SaleProductUpdateWithWhereUniqueWithoutSaleInput | SaleProductUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleProductUpdateManyWithWhereWithoutSaleInput | SaleProductUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleProductScalarWhereInput | SaleProductScalarWhereInput[]
  }

  export type SaleProductUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleProductCreateWithoutSaleInput, SaleProductUncheckedCreateWithoutSaleInput> | SaleProductCreateWithoutSaleInput[] | SaleProductUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleProductCreateOrConnectWithoutSaleInput | SaleProductCreateOrConnectWithoutSaleInput[]
    upsert?: SaleProductUpsertWithWhereUniqueWithoutSaleInput | SaleProductUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleProductCreateManySaleInputEnvelope
    set?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    disconnect?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    delete?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    connect?: SaleProductWhereUniqueInput | SaleProductWhereUniqueInput[]
    update?: SaleProductUpdateWithWhereUniqueWithoutSaleInput | SaleProductUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleProductUpdateManyWithWhereWithoutSaleInput | SaleProductUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleProductScalarWhereInput | SaleProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutSalesInput = {
    create?: XOR<ProductCreateWithoutSalesInput, ProductUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSalesInput
    connect?: ProductWhereUniqueInput
  }

  export type SaleCreateNestedOneWithoutProductsInput = {
    create?: XOR<SaleCreateWithoutProductsInput, SaleUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutProductsInput
    connect?: SaleWhereUniqueInput
  }

  export type SaleProductAdditionCreateNestedManyWithoutSaleProductInput = {
    create?: XOR<SaleProductAdditionCreateWithoutSaleProductInput, SaleProductAdditionUncheckedCreateWithoutSaleProductInput> | SaleProductAdditionCreateWithoutSaleProductInput[] | SaleProductAdditionUncheckedCreateWithoutSaleProductInput[]
    connectOrCreate?: SaleProductAdditionCreateOrConnectWithoutSaleProductInput | SaleProductAdditionCreateOrConnectWithoutSaleProductInput[]
    createMany?: SaleProductAdditionCreateManySaleProductInputEnvelope
    connect?: SaleProductAdditionWhereUniqueInput | SaleProductAdditionWhereUniqueInput[]
  }

  export type SaleProductAdditionUncheckedCreateNestedManyWithoutSaleProductInput = {
    create?: XOR<SaleProductAdditionCreateWithoutSaleProductInput, SaleProductAdditionUncheckedCreateWithoutSaleProductInput> | SaleProductAdditionCreateWithoutSaleProductInput[] | SaleProductAdditionUncheckedCreateWithoutSaleProductInput[]
    connectOrCreate?: SaleProductAdditionCreateOrConnectWithoutSaleProductInput | SaleProductAdditionCreateOrConnectWithoutSaleProductInput[]
    createMany?: SaleProductAdditionCreateManySaleProductInputEnvelope
    connect?: SaleProductAdditionWhereUniqueInput | SaleProductAdditionWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<ProductCreateWithoutSalesInput, ProductUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSalesInput
    upsert?: ProductUpsertWithoutSalesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSalesInput, ProductUpdateWithoutSalesInput>, ProductUncheckedUpdateWithoutSalesInput>
  }

  export type SaleUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<SaleCreateWithoutProductsInput, SaleUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutProductsInput
    upsert?: SaleUpsertWithoutProductsInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutProductsInput, SaleUpdateWithoutProductsInput>, SaleUncheckedUpdateWithoutProductsInput>
  }

  export type SaleProductAdditionUpdateManyWithoutSaleProductNestedInput = {
    create?: XOR<SaleProductAdditionCreateWithoutSaleProductInput, SaleProductAdditionUncheckedCreateWithoutSaleProductInput> | SaleProductAdditionCreateWithoutSaleProductInput[] | SaleProductAdditionUncheckedCreateWithoutSaleProductInput[]
    connectOrCreate?: SaleProductAdditionCreateOrConnectWithoutSaleProductInput | SaleProductAdditionCreateOrConnectWithoutSaleProductInput[]
    upsert?: SaleProductAdditionUpsertWithWhereUniqueWithoutSaleProductInput | SaleProductAdditionUpsertWithWhereUniqueWithoutSaleProductInput[]
    createMany?: SaleProductAdditionCreateManySaleProductInputEnvelope
    set?: SaleProductAdditionWhereUniqueInput | SaleProductAdditionWhereUniqueInput[]
    disconnect?: SaleProductAdditionWhereUniqueInput | SaleProductAdditionWhereUniqueInput[]
    delete?: SaleProductAdditionWhereUniqueInput | SaleProductAdditionWhereUniqueInput[]
    connect?: SaleProductAdditionWhereUniqueInput | SaleProductAdditionWhereUniqueInput[]
    update?: SaleProductAdditionUpdateWithWhereUniqueWithoutSaleProductInput | SaleProductAdditionUpdateWithWhereUniqueWithoutSaleProductInput[]
    updateMany?: SaleProductAdditionUpdateManyWithWhereWithoutSaleProductInput | SaleProductAdditionUpdateManyWithWhereWithoutSaleProductInput[]
    deleteMany?: SaleProductAdditionScalarWhereInput | SaleProductAdditionScalarWhereInput[]
  }

  export type SaleProductAdditionUncheckedUpdateManyWithoutSaleProductNestedInput = {
    create?: XOR<SaleProductAdditionCreateWithoutSaleProductInput, SaleProductAdditionUncheckedCreateWithoutSaleProductInput> | SaleProductAdditionCreateWithoutSaleProductInput[] | SaleProductAdditionUncheckedCreateWithoutSaleProductInput[]
    connectOrCreate?: SaleProductAdditionCreateOrConnectWithoutSaleProductInput | SaleProductAdditionCreateOrConnectWithoutSaleProductInput[]
    upsert?: SaleProductAdditionUpsertWithWhereUniqueWithoutSaleProductInput | SaleProductAdditionUpsertWithWhereUniqueWithoutSaleProductInput[]
    createMany?: SaleProductAdditionCreateManySaleProductInputEnvelope
    set?: SaleProductAdditionWhereUniqueInput | SaleProductAdditionWhereUniqueInput[]
    disconnect?: SaleProductAdditionWhereUniqueInput | SaleProductAdditionWhereUniqueInput[]
    delete?: SaleProductAdditionWhereUniqueInput | SaleProductAdditionWhereUniqueInput[]
    connect?: SaleProductAdditionWhereUniqueInput | SaleProductAdditionWhereUniqueInput[]
    update?: SaleProductAdditionUpdateWithWhereUniqueWithoutSaleProductInput | SaleProductAdditionUpdateWithWhereUniqueWithoutSaleProductInput[]
    updateMany?: SaleProductAdditionUpdateManyWithWhereWithoutSaleProductInput | SaleProductAdditionUpdateManyWithWhereWithoutSaleProductInput[]
    deleteMany?: SaleProductAdditionScalarWhereInput | SaleProductAdditionScalarWhereInput[]
  }

  export type SaleProductCreateNestedOneWithoutAdditionsInput = {
    create?: XOR<SaleProductCreateWithoutAdditionsInput, SaleProductUncheckedCreateWithoutAdditionsInput>
    connectOrCreate?: SaleProductCreateOrConnectWithoutAdditionsInput
    connect?: SaleProductWhereUniqueInput
  }

  export type SaleProductUpdateOneRequiredWithoutAdditionsNestedInput = {
    create?: XOR<SaleProductCreateWithoutAdditionsInput, SaleProductUncheckedCreateWithoutAdditionsInput>
    connectOrCreate?: SaleProductCreateOrConnectWithoutAdditionsInput
    upsert?: SaleProductUpsertWithoutAdditionsInput
    connect?: SaleProductWhereUniqueInput
    update?: XOR<XOR<SaleProductUpdateToOneWithWhereWithoutAdditionsInput, SaleProductUpdateWithoutAdditionsInput>, SaleProductUncheckedUpdateWithoutAdditionsInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProviderCreateNestedOneWithoutMovementsInput = {
    create?: XOR<ProviderCreateWithoutMovementsInput, ProviderUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutMovementsInput
    connect?: ProviderWhereUniqueInput
  }

  export type ProviderUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: XOR<ProviderCreateWithoutMovementsInput, ProviderUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutMovementsInput
    upsert?: ProviderUpsertWithoutMovementsInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutMovementsInput, ProviderUpdateWithoutMovementsInput>, ProviderUncheckedUpdateWithoutMovementsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SaleCreateWithoutGameInput = {
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    table: string
    generalObservation?: string | null
    orderType?: string
    user?: string
    paymentType?: string | null
    cashAmount?: number | null
    discountPercent?: number | null
    products?: SaleProductCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutGameInput = {
    id?: number
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    table: string
    generalObservation?: string | null
    orderType?: string
    user?: string
    paymentType?: string | null
    cashAmount?: number | null
    discountPercent?: number | null
    products?: SaleProductUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutGameInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutGameInput, SaleUncheckedCreateWithoutGameInput>
  }

  export type SaleCreateManyGameInputEnvelope = {
    data: SaleCreateManyGameInput | SaleCreateManyGameInput[]
  }

  export type SaleUpsertWithWhereUniqueWithoutGameInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutGameInput, SaleUncheckedUpdateWithoutGameInput>
    create: XOR<SaleCreateWithoutGameInput, SaleUncheckedCreateWithoutGameInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutGameInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutGameInput, SaleUncheckedUpdateWithoutGameInput>
  }

  export type SaleUpdateManyWithWhereWithoutGameInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutGameInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: IntFilter<"Sale"> | number
    totalAmount?: FloatFilter<"Sale"> | number
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
    status?: StringFilter<"Sale"> | string
    table?: StringFilter<"Sale"> | string
    generalObservation?: StringNullableFilter<"Sale"> | string | null
    gameId?: IntNullableFilter<"Sale"> | number | null
    orderType?: StringFilter<"Sale"> | string
    user?: StringFilter<"Sale"> | string
    paymentType?: StringNullableFilter<"Sale"> | string | null
    cashAmount?: FloatNullableFilter<"Sale"> | number | null
    discountPercent?: FloatNullableFilter<"Sale"> | number | null
  }

  export type ProviderCreateWithoutIngredientsInput = {
    name: string
    description?: string | null
    accountNumber: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: ProviderMovementCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutIngredientsInput = {
    id?: number
    name: string
    description?: string | null
    accountNumber: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: ProviderMovementUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutIngredientsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutIngredientsInput, ProviderUncheckedCreateWithoutIngredientsInput>
  }

  export type ProductIngredientCreateWithoutIngredientInput = {
    quantity: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutIngredientsInput
  }

  export type ProductIngredientUncheckedCreateWithoutIngredientInput = {
    productId: number
    quantity: number
    createdAt?: Date | string
  }

  export type ProductIngredientCreateOrConnectWithoutIngredientInput = {
    where: ProductIngredientWhereUniqueInput
    create: XOR<ProductIngredientCreateWithoutIngredientInput, ProductIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type ProductIngredientCreateManyIngredientInputEnvelope = {
    data: ProductIngredientCreateManyIngredientInput | ProductIngredientCreateManyIngredientInput[]
  }

  export type ProviderUpsertWithoutIngredientsInput = {
    update: XOR<ProviderUpdateWithoutIngredientsInput, ProviderUncheckedUpdateWithoutIngredientsInput>
    create: XOR<ProviderCreateWithoutIngredientsInput, ProviderUncheckedCreateWithoutIngredientsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutIngredientsInput, ProviderUncheckedUpdateWithoutIngredientsInput>
  }

  export type ProviderUpdateWithoutIngredientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: ProviderMovementUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: ProviderMovementUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProductIngredientUpsertWithWhereUniqueWithoutIngredientInput = {
    where: ProductIngredientWhereUniqueInput
    update: XOR<ProductIngredientUpdateWithoutIngredientInput, ProductIngredientUncheckedUpdateWithoutIngredientInput>
    create: XOR<ProductIngredientCreateWithoutIngredientInput, ProductIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type ProductIngredientUpdateWithWhereUniqueWithoutIngredientInput = {
    where: ProductIngredientWhereUniqueInput
    data: XOR<ProductIngredientUpdateWithoutIngredientInput, ProductIngredientUncheckedUpdateWithoutIngredientInput>
  }

  export type ProductIngredientUpdateManyWithWhereWithoutIngredientInput = {
    where: ProductIngredientScalarWhereInput
    data: XOR<ProductIngredientUpdateManyMutationInput, ProductIngredientUncheckedUpdateManyWithoutIngredientInput>
  }

  export type ProductIngredientScalarWhereInput = {
    AND?: ProductIngredientScalarWhereInput | ProductIngredientScalarWhereInput[]
    OR?: ProductIngredientScalarWhereInput[]
    NOT?: ProductIngredientScalarWhereInput | ProductIngredientScalarWhereInput[]
    productId?: IntFilter<"ProductIngredient"> | number
    ingredientId?: IntFilter<"ProductIngredient"> | number
    quantity?: IntFilter<"ProductIngredient"> | number
    createdAt?: DateTimeFilter<"ProductIngredient"> | Date | string
  }

  export type ProductIngredientCreateWithoutProductInput = {
    quantity: number
    createdAt?: Date | string
    ingredient: IngredientCreateNestedOneWithoutProductsInput
  }

  export type ProductIngredientUncheckedCreateWithoutProductInput = {
    ingredientId: number
    quantity: number
    createdAt?: Date | string
  }

  export type ProductIngredientCreateOrConnectWithoutProductInput = {
    where: ProductIngredientWhereUniqueInput
    create: XOR<ProductIngredientCreateWithoutProductInput, ProductIngredientUncheckedCreateWithoutProductInput>
  }

  export type ProductIngredientCreateManyProductInputEnvelope = {
    data: ProductIngredientCreateManyProductInput | ProductIngredientCreateManyProductInput[]
  }

  export type SaleProductCreateWithoutProductInput = {
    id?: string
    quantity: number
    observation?: string | null
    sale: SaleCreateNestedOneWithoutProductsInput
    additions?: SaleProductAdditionCreateNestedManyWithoutSaleProductInput
  }

  export type SaleProductUncheckedCreateWithoutProductInput = {
    id?: string
    saleId: number
    quantity: number
    observation?: string | null
    additions?: SaleProductAdditionUncheckedCreateNestedManyWithoutSaleProductInput
  }

  export type SaleProductCreateOrConnectWithoutProductInput = {
    where: SaleProductWhereUniqueInput
    create: XOR<SaleProductCreateWithoutProductInput, SaleProductUncheckedCreateWithoutProductInput>
  }

  export type SaleProductCreateManyProductInputEnvelope = {
    data: SaleProductCreateManyProductInput | SaleProductCreateManyProductInput[]
  }

  export type ProductIngredientUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductIngredientWhereUniqueInput
    update: XOR<ProductIngredientUpdateWithoutProductInput, ProductIngredientUncheckedUpdateWithoutProductInput>
    create: XOR<ProductIngredientCreateWithoutProductInput, ProductIngredientUncheckedCreateWithoutProductInput>
  }

  export type ProductIngredientUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductIngredientWhereUniqueInput
    data: XOR<ProductIngredientUpdateWithoutProductInput, ProductIngredientUncheckedUpdateWithoutProductInput>
  }

  export type ProductIngredientUpdateManyWithWhereWithoutProductInput = {
    where: ProductIngredientScalarWhereInput
    data: XOR<ProductIngredientUpdateManyMutationInput, ProductIngredientUncheckedUpdateManyWithoutProductInput>
  }

  export type SaleProductUpsertWithWhereUniqueWithoutProductInput = {
    where: SaleProductWhereUniqueInput
    update: XOR<SaleProductUpdateWithoutProductInput, SaleProductUncheckedUpdateWithoutProductInput>
    create: XOR<SaleProductCreateWithoutProductInput, SaleProductUncheckedCreateWithoutProductInput>
  }

  export type SaleProductUpdateWithWhereUniqueWithoutProductInput = {
    where: SaleProductWhereUniqueInput
    data: XOR<SaleProductUpdateWithoutProductInput, SaleProductUncheckedUpdateWithoutProductInput>
  }

  export type SaleProductUpdateManyWithWhereWithoutProductInput = {
    where: SaleProductScalarWhereInput
    data: XOR<SaleProductUpdateManyMutationInput, SaleProductUncheckedUpdateManyWithoutProductInput>
  }

  export type SaleProductScalarWhereInput = {
    AND?: SaleProductScalarWhereInput | SaleProductScalarWhereInput[]
    OR?: SaleProductScalarWhereInput[]
    NOT?: SaleProductScalarWhereInput | SaleProductScalarWhereInput[]
    id?: StringFilter<"SaleProduct"> | string
    saleId?: IntFilter<"SaleProduct"> | number
    productId?: IntFilter<"SaleProduct"> | number
    quantity?: FloatFilter<"SaleProduct"> | number
    observation?: StringNullableFilter<"SaleProduct"> | string | null
  }

  export type IngredientCreateWithoutProductsInput = {
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Origin?: string
    provider?: ProviderCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Origin?: string
    providerId?: number | null
  }

  export type IngredientCreateOrConnectWithoutProductsInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutProductsInput, IngredientUncheckedCreateWithoutProductsInput>
  }

  export type ProductCreateWithoutIngredientsInput = {
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity?: string | null
    barcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string
    rappi_price?: number | null
    sales?: SaleProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutIngredientsInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity?: string | null
    barcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string
    rappi_price?: number | null
    sales?: SaleProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutIngredientsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutIngredientsInput, ProductUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientUpsertWithoutProductsInput = {
    update: XOR<IngredientUpdateWithoutProductsInput, IngredientUncheckedUpdateWithoutProductsInput>
    create: XOR<IngredientCreateWithoutProductsInput, IngredientUncheckedCreateWithoutProductsInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutProductsInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutProductsInput, IngredientUncheckedUpdateWithoutProductsInput>
  }

  export type IngredientUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Origin?: StringFieldUpdateOperationsInput | string
    provider?: ProviderUpdateOneWithoutIngredientsNestedInput
  }

  export type IngredientUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Origin?: StringFieldUpdateOperationsInput | string
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUpsertWithoutIngredientsInput = {
    update: XOR<ProductUpdateWithoutIngredientsInput, ProductUncheckedUpdateWithoutIngredientsInput>
    create: XOR<ProductCreateWithoutIngredientsInput, ProductUncheckedCreateWithoutIngredientsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutIngredientsInput, ProductUncheckedUpdateWithoutIngredientsInput>
  }

  export type ProductUpdateWithoutIngredientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    rappi_price?: NullableFloatFieldUpdateOperationsInput | number | null
    sales?: SaleProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    rappi_price?: NullableFloatFieldUpdateOperationsInput | number | null
    sales?: SaleProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type IngredientCreateWithoutProviderInput = {
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Origin?: string
    products?: ProductIngredientCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutProviderInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Origin?: string
    products?: ProductIngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutProviderInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutProviderInput, IngredientUncheckedCreateWithoutProviderInput>
  }

  export type IngredientCreateManyProviderInputEnvelope = {
    data: IngredientCreateManyProviderInput | IngredientCreateManyProviderInput[]
  }

  export type ProviderMovementCreateWithoutProviderInput = {
    type: string
    amount: number
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ProviderMovementUncheckedCreateWithoutProviderInput = {
    id?: number
    type: string
    amount: number
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ProviderMovementCreateOrConnectWithoutProviderInput = {
    where: ProviderMovementWhereUniqueInput
    create: XOR<ProviderMovementCreateWithoutProviderInput, ProviderMovementUncheckedCreateWithoutProviderInput>
  }

  export type ProviderMovementCreateManyProviderInputEnvelope = {
    data: ProviderMovementCreateManyProviderInput | ProviderMovementCreateManyProviderInput[]
  }

  export type IngredientUpsertWithWhereUniqueWithoutProviderInput = {
    where: IngredientWhereUniqueInput
    update: XOR<IngredientUpdateWithoutProviderInput, IngredientUncheckedUpdateWithoutProviderInput>
    create: XOR<IngredientCreateWithoutProviderInput, IngredientUncheckedCreateWithoutProviderInput>
  }

  export type IngredientUpdateWithWhereUniqueWithoutProviderInput = {
    where: IngredientWhereUniqueInput
    data: XOR<IngredientUpdateWithoutProviderInput, IngredientUncheckedUpdateWithoutProviderInput>
  }

  export type IngredientUpdateManyWithWhereWithoutProviderInput = {
    where: IngredientScalarWhereInput
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyWithoutProviderInput>
  }

  export type IngredientScalarWhereInput = {
    AND?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    OR?: IngredientScalarWhereInput[]
    NOT?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    id?: IntFilter<"Ingredient"> | number
    name?: StringFilter<"Ingredient"> | string
    description?: StringNullableFilter<"Ingredient"> | string | null
    price?: IntFilter<"Ingredient"> | number
    quantity?: FloatNullableFilter<"Ingredient"> | number | null
    typeUnity?: StringFilter<"Ingredient"> | string
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
    Origin?: StringFilter<"Ingredient"> | string
    providerId?: IntNullableFilter<"Ingredient"> | number | null
  }

  export type ProviderMovementUpsertWithWhereUniqueWithoutProviderInput = {
    where: ProviderMovementWhereUniqueInput
    update: XOR<ProviderMovementUpdateWithoutProviderInput, ProviderMovementUncheckedUpdateWithoutProviderInput>
    create: XOR<ProviderMovementCreateWithoutProviderInput, ProviderMovementUncheckedCreateWithoutProviderInput>
  }

  export type ProviderMovementUpdateWithWhereUniqueWithoutProviderInput = {
    where: ProviderMovementWhereUniqueInput
    data: XOR<ProviderMovementUpdateWithoutProviderInput, ProviderMovementUncheckedUpdateWithoutProviderInput>
  }

  export type ProviderMovementUpdateManyWithWhereWithoutProviderInput = {
    where: ProviderMovementScalarWhereInput
    data: XOR<ProviderMovementUpdateManyMutationInput, ProviderMovementUncheckedUpdateManyWithoutProviderInput>
  }

  export type ProviderMovementScalarWhereInput = {
    AND?: ProviderMovementScalarWhereInput | ProviderMovementScalarWhereInput[]
    OR?: ProviderMovementScalarWhereInput[]
    NOT?: ProviderMovementScalarWhereInput | ProviderMovementScalarWhereInput[]
    id?: IntFilter<"ProviderMovement"> | number
    providerId?: IntFilter<"ProviderMovement"> | number
    type?: StringFilter<"ProviderMovement"> | string
    amount?: FloatFilter<"ProviderMovement"> | number
    description?: StringNullableFilter<"ProviderMovement"> | string | null
    imageUrl?: StringNullableFilter<"ProviderMovement"> | string | null
    createdAt?: DateTimeFilter<"ProviderMovement"> | Date | string
  }

  export type GameCreateWithoutSalesInput = {
    name: string
  }

  export type GameUncheckedCreateWithoutSalesInput = {
    id?: number
    name: string
  }

  export type GameCreateOrConnectWithoutSalesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutSalesInput, GameUncheckedCreateWithoutSalesInput>
  }

  export type SaleProductCreateWithoutSaleInput = {
    id?: string
    quantity: number
    observation?: string | null
    product: ProductCreateNestedOneWithoutSalesInput
    additions?: SaleProductAdditionCreateNestedManyWithoutSaleProductInput
  }

  export type SaleProductUncheckedCreateWithoutSaleInput = {
    id?: string
    productId: number
    quantity: number
    observation?: string | null
    additions?: SaleProductAdditionUncheckedCreateNestedManyWithoutSaleProductInput
  }

  export type SaleProductCreateOrConnectWithoutSaleInput = {
    where: SaleProductWhereUniqueInput
    create: XOR<SaleProductCreateWithoutSaleInput, SaleProductUncheckedCreateWithoutSaleInput>
  }

  export type SaleProductCreateManySaleInputEnvelope = {
    data: SaleProductCreateManySaleInput | SaleProductCreateManySaleInput[]
  }

  export type GameUpsertWithoutSalesInput = {
    update: XOR<GameUpdateWithoutSalesInput, GameUncheckedUpdateWithoutSalesInput>
    create: XOR<GameCreateWithoutSalesInput, GameUncheckedCreateWithoutSalesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutSalesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutSalesInput, GameUncheckedUpdateWithoutSalesInput>
  }

  export type GameUpdateWithoutSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SaleProductUpsertWithWhereUniqueWithoutSaleInput = {
    where: SaleProductWhereUniqueInput
    update: XOR<SaleProductUpdateWithoutSaleInput, SaleProductUncheckedUpdateWithoutSaleInput>
    create: XOR<SaleProductCreateWithoutSaleInput, SaleProductUncheckedCreateWithoutSaleInput>
  }

  export type SaleProductUpdateWithWhereUniqueWithoutSaleInput = {
    where: SaleProductWhereUniqueInput
    data: XOR<SaleProductUpdateWithoutSaleInput, SaleProductUncheckedUpdateWithoutSaleInput>
  }

  export type SaleProductUpdateManyWithWhereWithoutSaleInput = {
    where: SaleProductScalarWhereInput
    data: XOR<SaleProductUpdateManyMutationInput, SaleProductUncheckedUpdateManyWithoutSaleInput>
  }

  export type ProductCreateWithoutSalesInput = {
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity?: string | null
    barcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string
    rappi_price?: number | null
    ingredients?: ProductIngredientCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSalesInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity?: string | null
    barcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string
    rappi_price?: number | null
    ingredients?: ProductIngredientUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSalesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSalesInput, ProductUncheckedCreateWithoutSalesInput>
  }

  export type SaleCreateWithoutProductsInput = {
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    table: string
    generalObservation?: string | null
    orderType?: string
    user?: string
    paymentType?: string | null
    cashAmount?: number | null
    discountPercent?: number | null
    game?: GameCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutProductsInput = {
    id?: number
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    table: string
    generalObservation?: string | null
    gameId?: number | null
    orderType?: string
    user?: string
    paymentType?: string | null
    cashAmount?: number | null
    discountPercent?: number | null
  }

  export type SaleCreateOrConnectWithoutProductsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutProductsInput, SaleUncheckedCreateWithoutProductsInput>
  }

  export type SaleProductAdditionCreateWithoutSaleProductInput = {
    name: string
    price: number
    additionId?: number | null
  }

  export type SaleProductAdditionUncheckedCreateWithoutSaleProductInput = {
    id?: number
    name: string
    price: number
    additionId?: number | null
  }

  export type SaleProductAdditionCreateOrConnectWithoutSaleProductInput = {
    where: SaleProductAdditionWhereUniqueInput
    create: XOR<SaleProductAdditionCreateWithoutSaleProductInput, SaleProductAdditionUncheckedCreateWithoutSaleProductInput>
  }

  export type SaleProductAdditionCreateManySaleProductInputEnvelope = {
    data: SaleProductAdditionCreateManySaleProductInput | SaleProductAdditionCreateManySaleProductInput[]
  }

  export type ProductUpsertWithoutSalesInput = {
    update: XOR<ProductUpdateWithoutSalesInput, ProductUncheckedUpdateWithoutSalesInput>
    create: XOR<ProductCreateWithoutSalesInput, ProductUncheckedCreateWithoutSalesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSalesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSalesInput, ProductUncheckedUpdateWithoutSalesInput>
  }

  export type ProductUpdateWithoutSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    rappi_price?: NullableFloatFieldUpdateOperationsInput | number | null
    ingredients?: ProductIngredientUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    rappi_price?: NullableFloatFieldUpdateOperationsInput | number | null
    ingredients?: ProductIngredientUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SaleUpsertWithoutProductsInput = {
    update: XOR<SaleUpdateWithoutProductsInput, SaleUncheckedUpdateWithoutProductsInput>
    create: XOR<SaleCreateWithoutProductsInput, SaleUncheckedCreateWithoutProductsInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutProductsInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutProductsInput, SaleUncheckedUpdateWithoutProductsInput>
  }

  export type SaleUpdateWithoutProductsInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    generalObservation?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    cashAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    game?: GameUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    generalObservation?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: NullableIntFieldUpdateOperationsInput | number | null
    orderType?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    cashAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SaleProductAdditionUpsertWithWhereUniqueWithoutSaleProductInput = {
    where: SaleProductAdditionWhereUniqueInput
    update: XOR<SaleProductAdditionUpdateWithoutSaleProductInput, SaleProductAdditionUncheckedUpdateWithoutSaleProductInput>
    create: XOR<SaleProductAdditionCreateWithoutSaleProductInput, SaleProductAdditionUncheckedCreateWithoutSaleProductInput>
  }

  export type SaleProductAdditionUpdateWithWhereUniqueWithoutSaleProductInput = {
    where: SaleProductAdditionWhereUniqueInput
    data: XOR<SaleProductAdditionUpdateWithoutSaleProductInput, SaleProductAdditionUncheckedUpdateWithoutSaleProductInput>
  }

  export type SaleProductAdditionUpdateManyWithWhereWithoutSaleProductInput = {
    where: SaleProductAdditionScalarWhereInput
    data: XOR<SaleProductAdditionUpdateManyMutationInput, SaleProductAdditionUncheckedUpdateManyWithoutSaleProductInput>
  }

  export type SaleProductAdditionScalarWhereInput = {
    AND?: SaleProductAdditionScalarWhereInput | SaleProductAdditionScalarWhereInput[]
    OR?: SaleProductAdditionScalarWhereInput[]
    NOT?: SaleProductAdditionScalarWhereInput | SaleProductAdditionScalarWhereInput[]
    id?: IntFilter<"SaleProductAddition"> | number
    saleProductId?: StringFilter<"SaleProductAddition"> | string
    name?: StringFilter<"SaleProductAddition"> | string
    price?: FloatFilter<"SaleProductAddition"> | number
    additionId?: IntNullableFilter<"SaleProductAddition"> | number | null
  }

  export type SaleProductCreateWithoutAdditionsInput = {
    id?: string
    quantity: number
    observation?: string | null
    product: ProductCreateNestedOneWithoutSalesInput
    sale: SaleCreateNestedOneWithoutProductsInput
  }

  export type SaleProductUncheckedCreateWithoutAdditionsInput = {
    id?: string
    saleId: number
    productId: number
    quantity: number
    observation?: string | null
  }

  export type SaleProductCreateOrConnectWithoutAdditionsInput = {
    where: SaleProductWhereUniqueInput
    create: XOR<SaleProductCreateWithoutAdditionsInput, SaleProductUncheckedCreateWithoutAdditionsInput>
  }

  export type SaleProductUpsertWithoutAdditionsInput = {
    update: XOR<SaleProductUpdateWithoutAdditionsInput, SaleProductUncheckedUpdateWithoutAdditionsInput>
    create: XOR<SaleProductCreateWithoutAdditionsInput, SaleProductUncheckedCreateWithoutAdditionsInput>
    where?: SaleProductWhereInput
  }

  export type SaleProductUpdateToOneWithWhereWithoutAdditionsInput = {
    where?: SaleProductWhereInput
    data: XOR<SaleProductUpdateWithoutAdditionsInput, SaleProductUncheckedUpdateWithoutAdditionsInput>
  }

  export type SaleProductUpdateWithoutAdditionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutSalesNestedInput
    sale?: SaleUpdateOneRequiredWithoutProductsNestedInput
  }

  export type SaleProductUncheckedUpdateWithoutAdditionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProviderCreateWithoutMovementsInput = {
    name: string
    description?: string | null
    accountNumber: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: IngredientCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutMovementsInput = {
    id?: number
    name: string
    description?: string | null
    accountNumber: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutMovementsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutMovementsInput, ProviderUncheckedCreateWithoutMovementsInput>
  }

  export type ProviderUpsertWithoutMovementsInput = {
    update: XOR<ProviderUpdateWithoutMovementsInput, ProviderUncheckedUpdateWithoutMovementsInput>
    create: XOR<ProviderCreateWithoutMovementsInput, ProviderUncheckedCreateWithoutMovementsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutMovementsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutMovementsInput, ProviderUncheckedUpdateWithoutMovementsInput>
  }

  export type ProviderUpdateWithoutMovementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutMovementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type SaleCreateManyGameInput = {
    id?: number
    totalAmount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    table: string
    generalObservation?: string | null
    orderType?: string
    user?: string
    paymentType?: string | null
    cashAmount?: number | null
    discountPercent?: number | null
  }

  export type SaleUpdateWithoutGameInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    generalObservation?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    cashAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    products?: SaleProductUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    generalObservation?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    cashAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    products?: SaleProductUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    generalObservation?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    cashAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductIngredientCreateManyIngredientInput = {
    productId: number
    quantity: number
    createdAt?: Date | string
  }

  export type ProductIngredientUpdateWithoutIngredientInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type ProductIngredientUncheckedUpdateWithoutIngredientInput = {
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductIngredientUncheckedUpdateManyWithoutIngredientInput = {
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductIngredientCreateManyProductInput = {
    ingredientId: number
    quantity: number
    createdAt?: Date | string
  }

  export type SaleProductCreateManyProductInput = {
    id?: string
    saleId: number
    quantity: number
    observation?: string | null
  }

  export type ProductIngredientUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredient?: IngredientUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductIngredientUncheckedUpdateWithoutProductInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductIngredientUncheckedUpdateManyWithoutProductInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleProductUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    sale?: SaleUpdateOneRequiredWithoutProductsNestedInput
    additions?: SaleProductAdditionUpdateManyWithoutSaleProductNestedInput
  }

  export type SaleProductUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    additions?: SaleProductAdditionUncheckedUpdateManyWithoutSaleProductNestedInput
  }

  export type SaleProductUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IngredientCreateManyProviderInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number | null
    typeUnity: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Origin?: string
  }

  export type ProviderMovementCreateManyProviderInput = {
    id?: number
    type: string
    amount: number
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type IngredientUpdateWithoutProviderInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Origin?: StringFieldUpdateOperationsInput | string
    products?: ProductIngredientUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Origin?: StringFieldUpdateOperationsInput | string
    products?: ProductIngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    typeUnity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Origin?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderMovementUpdateWithoutProviderInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderMovementUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderMovementUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleProductCreateManySaleInput = {
    id?: string
    productId: number
    quantity: number
    observation?: string | null
  }

  export type SaleProductUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutSalesNestedInput
    additions?: SaleProductAdditionUpdateManyWithoutSaleProductNestedInput
  }

  export type SaleProductUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    additions?: SaleProductAdditionUncheckedUpdateManyWithoutSaleProductNestedInput
  }

  export type SaleProductUncheckedUpdateManyWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleProductAdditionCreateManySaleProductInput = {
    id?: number
    name: string
    price: number
    additionId?: number | null
  }

  export type SaleProductAdditionUpdateWithoutSaleProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    additionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SaleProductAdditionUncheckedUpdateWithoutSaleProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    additionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SaleProductAdditionUncheckedUpdateManyWithoutSaleProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    additionId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use GameCountOutputTypeDefaultArgs instead
     */
    export type GameCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngredientCountOutputTypeDefaultArgs instead
     */
    export type IngredientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngredientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProviderCountOutputTypeDefaultArgs instead
     */
    export type ProviderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProviderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleCountOutputTypeDefaultArgs instead
     */
    export type SaleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleProductCountOutputTypeDefaultArgs instead
     */
    export type SaleProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlertDefaultArgs instead
     */
    export type AlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlertDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameDefaultArgs instead
     */
    export type GameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngredientDefaultArgs instead
     */
    export type IngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngredientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductIngredientDefaultArgs instead
     */
    export type ProductIngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductIngredientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProviderDefaultArgs instead
     */
    export type ProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProviderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleDefaultArgs instead
     */
    export type SaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleProductDefaultArgs instead
     */
    export type SaleProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleProductAdditionDefaultArgs instead
     */
    export type SaleProductAdditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleProductAdditionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionDefaultArgs instead
     */
    export type SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UtilsDefaultArgs instead
     */
    export type UtilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UtilsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProviderMovementDefaultArgs instead
     */
    export type ProviderMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProviderMovementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusinessDefaultArgs instead
     */
    export type BusinessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BusinessDefaultArgs<ExtArgs>

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