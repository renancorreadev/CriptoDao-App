/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace Marketplace {
  export type MarketItemStruct = {
    itemId: BigNumberish;
    tokenId: BigNumberish;
    price: BigNumberish;
    isSold: boolean;
    seller: string;
    owner: string;
    nftContract: string;
    collectionId: BigNumberish;
  };

  export type MarketItemStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    string,
    string,
    string,
    BigNumber
  ] & {
    itemId: BigNumber;
    tokenId: BigNumber;
    price: BigNumber;
    isSold: boolean;
    seller: string;
    owner: string;
    nftContract: string;
    collectionId: BigNumber;
  };
}

export interface MarketplaceInterface extends utils.Interface {
  functions: {
    "allCollections(uint256)": FunctionFragment;
    "authority()": FunctionFragment;
    "createCollection(string,string,string,address)": FunctionFragment;
    "createMarketItems(uint256,string,uint256,uint256)": FunctionFragment;
    "createMarketSale(uint256,uint256,uint256)": FunctionFragment;
    "donate()": FunctionFragment;
    "getAllMarketItems()": FunctionFragment;
    "getDeployed(string)": FunctionFragment;
    "getMyNFTs()": FunctionFragment;
    "getNFT(uint256)": FunctionFragment;
    "getNFTsCreated(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "withdrawETH()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allCollections"
      | "authority"
      | "createCollection"
      | "createMarketItems"
      | "createMarketSale"
      | "donate"
      | "getAllMarketItems"
      | "getDeployed"
      | "getMyNFTs"
      | "getNFT"
      | "getNFTsCreated"
      | "owner"
      | "setAuthority"
      | "setOwner"
      | "withdrawETH"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allCollections",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createCollection",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createMarketItems",
    values: [BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createMarketSale",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "donate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAllMarketItems",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getDeployed", values: [string]): string;
  encodeFunctionData(functionFragment: "getMyNFTs", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getNFT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNFTsCreated",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdrawETH",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "allCollections",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMarketItems",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMarketSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "donate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllMarketItems",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDeployed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getMyNFTs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNFTsCreated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH",
    data: BytesLike
  ): Result;

  events: {
    "AuthorityUpdated(address,address)": EventFragment;
    "CollectionCreated(uint256,address,address)": EventFragment;
    "MarketItemSold(uint256,uint256,uint256,address,address,address)": EventFragment;
    "MarketItemsCreated(uint256,address)": EventFragment;
    "OwnerUpdated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CollectionCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketItemSold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketItemsCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
}

export interface AuthorityUpdatedEventObject {
  user: string;
  newAuthority: string;
}
export type AuthorityUpdatedEvent = TypedEvent<
  [string, string],
  AuthorityUpdatedEventObject
>;

export type AuthorityUpdatedEventFilter =
  TypedEventFilter<AuthorityUpdatedEvent>;

export interface CollectionCreatedEventObject {
  collectionId: BigNumber;
  deployedTo: string;
  seller: string;
}
export type CollectionCreatedEvent = TypedEvent<
  [BigNumber, string, string],
  CollectionCreatedEventObject
>;

export type CollectionCreatedEventFilter =
  TypedEventFilter<CollectionCreatedEvent>;

export interface MarketItemSoldEventObject {
  price: BigNumber;
  itemId: BigNumber;
  tokenId: BigNumber;
  nftContract: string;
  seller: string;
  buyer: string;
}
export type MarketItemSoldEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, string, string],
  MarketItemSoldEventObject
>;

export type MarketItemSoldEventFilter = TypedEventFilter<MarketItemSoldEvent>;

export interface MarketItemsCreatedEventObject {
  price: BigNumber;
  nftContract: string;
}
export type MarketItemsCreatedEvent = TypedEvent<
  [BigNumber, string],
  MarketItemsCreatedEventObject
>;

export type MarketItemsCreatedEventFilter =
  TypedEventFilter<MarketItemsCreatedEvent>;

export interface OwnerUpdatedEventObject {
  user: string;
  newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<
  [string, string],
  OwnerUpdatedEventObject
>;

export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;

export interface Marketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketplaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allCollections(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    authority(overrides?: CallOverrides): Promise<[string]>;

    createCollection(
      _salt: string,
      _name: string,
      _symbol: string,
      _seller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createMarketItems(
      collectionId: BigNumberish,
      _baseURI: string,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createMarketSale(
      collectionId: BigNumberish,
      itemId: BigNumberish,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    donate(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllMarketItems(
      overrides?: CallOverrides
    ): Promise<[Marketplace.MarketItemStructOutput[]]>;

    getDeployed(_salt: string, overrides?: CallOverrides): Promise<[string]>;

    getMyNFTs(
      overrides?: CallOverrides
    ): Promise<[Marketplace.MarketItemStructOutput[]]>;

    getNFT(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Marketplace.MarketItemStructOutput]>;

    getNFTsCreated(
      _seller: string,
      overrides?: CallOverrides
    ): Promise<[Marketplace.MarketItemStructOutput[]]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setAuthority(
      newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawETH(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allCollections(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  authority(overrides?: CallOverrides): Promise<string>;

  createCollection(
    _salt: string,
    _name: string,
    _symbol: string,
    _seller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createMarketItems(
    collectionId: BigNumberish,
    _baseURI: string,
    amount: BigNumberish,
    price: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createMarketSale(
    collectionId: BigNumberish,
    itemId: BigNumberish,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  donate(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllMarketItems(
    overrides?: CallOverrides
  ): Promise<Marketplace.MarketItemStructOutput[]>;

  getDeployed(_salt: string, overrides?: CallOverrides): Promise<string>;

  getMyNFTs(
    overrides?: CallOverrides
  ): Promise<Marketplace.MarketItemStructOutput[]>;

  getNFT(
    itemId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Marketplace.MarketItemStructOutput>;

  getNFTsCreated(
    _seller: string,
    overrides?: CallOverrides
  ): Promise<Marketplace.MarketItemStructOutput[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  setAuthority(
    newAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawETH(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allCollections(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    authority(overrides?: CallOverrides): Promise<string>;

    createCollection(
      _salt: string,
      _name: string,
      _symbol: string,
      _seller: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createMarketItems(
      collectionId: BigNumberish,
      _baseURI: string,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createMarketSale(
      collectionId: BigNumberish,
      itemId: BigNumberish,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    donate(overrides?: CallOverrides): Promise<void>;

    getAllMarketItems(
      overrides?: CallOverrides
    ): Promise<Marketplace.MarketItemStructOutput[]>;

    getDeployed(_salt: string, overrides?: CallOverrides): Promise<string>;

    getMyNFTs(
      overrides?: CallOverrides
    ): Promise<Marketplace.MarketItemStructOutput[]>;

    getNFT(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Marketplace.MarketItemStructOutput>;

    getNFTsCreated(
      _seller: string,
      overrides?: CallOverrides
    ): Promise<Marketplace.MarketItemStructOutput[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    setAuthority(
      newAuthority: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    withdrawETH(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AuthorityUpdated(address,address)"(
      user?: string | null,
      newAuthority?: string | null
    ): AuthorityUpdatedEventFilter;
    AuthorityUpdated(
      user?: string | null,
      newAuthority?: string | null
    ): AuthorityUpdatedEventFilter;

    "CollectionCreated(uint256,address,address)"(
      collectionId?: BigNumberish | null,
      deployedTo?: string | null,
      seller?: string | null
    ): CollectionCreatedEventFilter;
    CollectionCreated(
      collectionId?: BigNumberish | null,
      deployedTo?: string | null,
      seller?: string | null
    ): CollectionCreatedEventFilter;

    "MarketItemSold(uint256,uint256,uint256,address,address,address)"(
      price?: null,
      itemId?: BigNumberish | null,
      tokenId?: BigNumberish | null,
      nftContract?: string | null,
      seller?: null,
      buyer?: null
    ): MarketItemSoldEventFilter;
    MarketItemSold(
      price?: null,
      itemId?: BigNumberish | null,
      tokenId?: BigNumberish | null,
      nftContract?: string | null,
      seller?: null,
      buyer?: null
    ): MarketItemSoldEventFilter;

    "MarketItemsCreated(uint256,address)"(
      price?: BigNumberish | null,
      nftContract?: string | null
    ): MarketItemsCreatedEventFilter;
    MarketItemsCreated(
      price?: BigNumberish | null,
      nftContract?: string | null
    ): MarketItemsCreatedEventFilter;

    "OwnerUpdated(address,address)"(
      user?: string | null,
      newOwner?: string | null
    ): OwnerUpdatedEventFilter;
    OwnerUpdated(
      user?: string | null,
      newOwner?: string | null
    ): OwnerUpdatedEventFilter;
  };

  estimateGas: {
    allCollections(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    authority(overrides?: CallOverrides): Promise<BigNumber>;

    createCollection(
      _salt: string,
      _name: string,
      _symbol: string,
      _seller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createMarketItems(
      collectionId: BigNumberish,
      _baseURI: string,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createMarketSale(
      collectionId: BigNumberish,
      itemId: BigNumberish,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    donate(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllMarketItems(overrides?: CallOverrides): Promise<BigNumber>;

    getDeployed(_salt: string, overrides?: CallOverrides): Promise<BigNumber>;

    getMyNFTs(overrides?: CallOverrides): Promise<BigNumber>;

    getNFT(itemId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getNFTsCreated(
      _seller: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(
      newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawETH(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allCollections(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createCollection(
      _salt: string,
      _name: string,
      _symbol: string,
      _seller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createMarketItems(
      collectionId: BigNumberish,
      _baseURI: string,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createMarketSale(
      collectionId: BigNumberish,
      itemId: BigNumberish,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    donate(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllMarketItems(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeployed(
      _salt: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMyNFTs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNFT(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNFTsCreated(
      _seller: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAuthority(
      newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawETH(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
