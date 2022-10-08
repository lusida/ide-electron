import {
  BinaryBuffer,
  Emitter,
  Event,
  FileChangeEvent,
  FileStat,
  FileSystemProvider,
  FileSystemProviderCapabilities,
  FileType,
  FileUri,
  Uri,
} from '@opensumi/ide-core-common';
import { LOWCODE_SCHAME } from '../common/lowcode.metadata';

export class LowCodeFileSystemProvider implements FileSystemProvider {
  capabilities: FileSystemProviderCapabilities.Readonly;
  onDidChangeCapabilities = Event.None;

  readonly = true;
  shadowFiles: Map<string, Uint8Array> = new Map();
  private fileChangeEmitter = new Emitter<FileChangeEvent>();
  onDidChangeFile: Event<FileChangeEvent> = this.fileChangeEmitter.event;
  watch(uri: Uri, options: { recursive: boolean; excludes: string[] }): number {
    throw new Error('Method not implemented.');
  }
  stat(uri: Uri): Promise<FileStat> {
    const path = `${LOWCODE_SCHAME.Entity}:///${FileUri.fsPath(uri.toString())}`;

    alert(path);

    return Promise.resolve({
      uri: path,
      lastModification: 0,
    } as FileStat);
  }
  readDirectory(uri: Uri): [string, FileType][] | Promise<[string, FileType][]> {
    throw new Error('Method not implemented.');
  }
  createDirectory(uri: Uri) {
    throw new Error('Method not implemented.');
  }
  readFile(uri: Uri) {
    const content = this.shadowFiles.get(uri.toString());
    return content || BinaryBuffer.fromString('no available').buffer;
  }
  writeFile(uri: Uri, content: Uint8Array, options: { create: boolean; overwrite: boolean }) {
    this.shadowFiles.set(uri.toString(), content);
  }
  delete(uri: Uri, options: { recursive: boolean; moveToTrash?: boolean }) {
    throw new Error('Method not implemented.');
  }
  rename(oldUri: Uri, newUri: Uri, options: { overwrite: boolean }) {
    throw new Error('Method not implemented.');
  }
  copy?(source: Uri, destination: Uri, options: { overwrite: boolean }) {
    throw new Error('Method not implemented.');
  }
  exists?(uri: Uri | Uri): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  access?(uri: Uri, mode: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
