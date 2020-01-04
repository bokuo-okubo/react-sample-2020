// tslint:disable
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

// Generated in 2020-01-04T12:54:34+09:00

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Date custom scalar type */
  Date: any,
};


export type ItemInput = {
  title: Scalars['String'],
  price: Scalars['Int'],
  description: Scalars['String'],
  imageUrl: Scalars['String'],
};

export type ItemType = {
   __typename?: 'ItemType',
  id: Scalars['ID'],
  title: Scalars['String'],
  price: Scalars['Int'],
  description: Scalars['String'],
  imageUrl: Scalars['String'],
  updated: Scalars['Date'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createItem: ItemType,
  updateItem: ItemType,
  deleteItem: ItemType,
};


export type MutationCreateItemArgs = {
  input: ItemInput
};


export type MutationUpdateItemArgs = {
  input: ItemInput,
  id: Scalars['String']
};


export type MutationDeleteItemArgs = {
  id: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  items: Array<ItemType>,
  item: ItemType,
  hello: Scalars['String'],
};


export type QueryItemArgs = {
  id: Scalars['String']
};

export type CreateItemMutationVariables = {
  title: Scalars['String'],
  price: Scalars['Int'],
  description: Scalars['String'],
  imageUrl: Scalars['String']
};


export type CreateItemMutation = (
  { __typename?: 'Mutation' }
  & { createItem: (
    { __typename?: 'ItemType' }
    & Pick<ItemType, 'id' | 'title' | 'description' | 'price'>
  ) }
);

export type GetSingleItemQueryVariables = {
  id: Scalars['String']
};


export type GetSingleItemQuery = (
  { __typename?: 'Query' }
  & { item: (
    { __typename?: 'ItemType' }
    & Pick<ItemType, 'id' | 'title' | 'price' | 'description' | 'imageUrl' | 'updated'>
  ) }
);

export type RootQueryVariables = {};


export type RootQuery = (
  { __typename?: 'Query' }
  & { items: Array<(
    { __typename?: 'ItemType' }
    & Pick<ItemType, 'id' | 'title' | 'price' | 'description' | 'imageUrl' | 'updated'>
  )> }
);


export const CreateItemDocument = gql`
    mutation CreateItem($title: String!, $price: Int!, $description: String!, $imageUrl: String!) {
  createItem(input: {title: $title, price: $price, description: $description, imageUrl: $imageUrl}) {
    id
    title
    description
    price
  }
}
    `;
export type CreateItemMutationFn = ApolloReactCommon.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      title: // value for 'title'
 *      price: // value for 'price'
 *      description: // value for 'description'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, baseOptions);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = ApolloReactCommon.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const GetSingleItemDocument = gql`
    query GetSingleItem($id: String!) {
  item(id: $id) {
    id
    title
    price
    description
    imageUrl
    updated
  }
}
    `;

/**
 * __useGetSingleItemQuery__
 *
 * To run a query within a React component, call `useGetSingleItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleItemQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSingleItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSingleItemQuery, GetSingleItemQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSingleItemQuery, GetSingleItemQueryVariables>(GetSingleItemDocument, baseOptions);
      }
export function useGetSingleItemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSingleItemQuery, GetSingleItemQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSingleItemQuery, GetSingleItemQueryVariables>(GetSingleItemDocument, baseOptions);
        }
export type GetSingleItemQueryHookResult = ReturnType<typeof useGetSingleItemQuery>;
export type GetSingleItemLazyQueryHookResult = ReturnType<typeof useGetSingleItemLazyQuery>;
export type GetSingleItemQueryResult = ApolloReactCommon.QueryResult<GetSingleItemQuery, GetSingleItemQueryVariables>;
export const RootDocument = gql`
    query Root {
  items {
    id
    title
    price
    description
    imageUrl
    updated
  }
}
    `;

/**
 * __useRootQuery__
 *
 * To run a query within a React component, call `useRootQuery` and pass it any options that fit your needs.
 * When your component renders, `useRootQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRootQuery({
 *   variables: {
 *   },
 * });
 */
export function useRootQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RootQuery, RootQueryVariables>) {
        return ApolloReactHooks.useQuery<RootQuery, RootQueryVariables>(RootDocument, baseOptions);
      }
export function useRootLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RootQuery, RootQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RootQuery, RootQueryVariables>(RootDocument, baseOptions);
        }
export type RootQueryHookResult = ReturnType<typeof useRootQuery>;
export type RootLazyQueryHookResult = ReturnType<typeof useRootLazyQuery>;
export type RootQueryResult = ApolloReactCommon.QueryResult<RootQuery, RootQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  ItemType: ResolverTypeWrapper<ItemType>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  Mutation: ResolverTypeWrapper<{}>,
  ItemInput: ItemInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  ItemType: ItemType,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Int: Scalars['Int'],
  Date: Scalars['Date'],
  Mutation: {},
  ItemInput: ItemInput,
  Boolean: Scalars['Boolean'],
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type ItemTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemType'] = ResolversParentTypes['ItemType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updated?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createItem?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType, RequireFields<MutationCreateItemArgs, 'input'>>,
  updateItem?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType, RequireFields<MutationUpdateItemArgs, 'input' | 'id'>>,
  deleteItem?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType, RequireFields<MutationDeleteItemArgs, 'id'>>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  items?: Resolver<Array<ResolversTypes['ItemType']>, ParentType, ContextType>,
  item?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType, RequireFields<QueryItemArgs, 'id'>>,
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType,
  ItemType?: ItemTypeResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
