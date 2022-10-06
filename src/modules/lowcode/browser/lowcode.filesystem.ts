import {
  Event,
  FileChangeEvent,
  FileStat,
  FileSystemProvider,
  FileSystemProviderCapabilities,
  FileType,
  Uri,
} from '@opensumi/ide-core-common';

export type ILowCodeFileSystemProvider = FileSystemProvider;

export class LowCodeSystemFileProvider implements ILowCodeFileSystemProvider {
  capabilities: FileSystemProviderCapabilities;
  onDidChangeCapabilities: Event<void>;
  readonly?: boolean | undefined;
  onDidChangeFile: Event<FileChangeEvent>;
  watch(uri: Uri, options: { excludes?: string[] | undefined }): number | Promise<number> {
    throw new Error('Method not implemented.');
  }
  unwatch?(watcherId: number): void | Promise<void> {
    throw new Error('Method not implemented.');
  }
  stat(uri: Uri): Promise<void | FileStat> {
    throw new Error('Method not implemented.');
  }
  readDirectory(uri: Uri): [string, FileType][] | Promise<[string, FileType][]> {
    throw new Error('Method not implemented.');
  }
  createDirectory(uri: Uri): void | Promise<void | FileStat> {
    throw new Error('Method not implemented.');
  }
  readFile(uri: Uri, encoding?: string | undefined): void | Uint8Array | Promise<void | Uint8Array> {
    throw new Error('Method not implemented.');
  }
  writeFile(
    uri: Uri,
    content: Uint8Array,
    options: { create: boolean; overwrite: boolean; encoding?: string | undefined },
  ): void | Thenable<void | FileStat> {
    throw new Error('Method not implemented.');
  }
  delete(uri: Uri, options: { recursive: boolean; moveToTrash?: boolean | undefined }): void | Promise<void> {
    throw new Error('Method not implemented.');
  }
  rename(oldstring: Uri, newstring: Uri, options: { overwrite: boolean }): void | Promise<void | FileStat> {
    throw new Error('Method not implemented.');
  }
}
