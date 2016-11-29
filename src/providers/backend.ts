/// <reference path="../../typings/globals/socket.io-client/index.d.ts"/>
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

/*
  Generated class for the Backend provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Backend {

	public static url: string = "http://localhost:3000/"
	public static socket: SocketIOClient.Socket;

  public static establish(cb) {
		Backend.socket = io(Backend.url, {
			transports:['websocket'],
			secure: true,
			reconnection: true,
			reconnectionDelay: 5000,
		});
		Backend.socket.on("connect", cb);
  }

}
