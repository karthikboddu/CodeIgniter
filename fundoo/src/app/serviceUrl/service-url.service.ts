import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceUrlService {

  constructor() { }
  public firebase = "https://fcm.googleapis.com/fcm/send";
  public host = environment.baseUrl;
  public register = "registerD";
  public login = "loginD";
  public forgot = "forgotpass";
  public reset = "resetpass";
  public fetchmail = "fetchemail";
  public createnotes = "noteInsertD";
  public fetchnotes = "fetchnotes";
  public updatenotes = "updatenote";
  public setcolor = "setcolor";
  public notetrash = "trashnote";
  public notedelete = "deletenote";
  public restorenote = "restorenote";
  public fetchtrash = "fetchnote";
  public fetchrem = "fetchreminder";
  public fetchArch = "fetcharchive";
  public unarchived = "unarchive";
  public setlabel ="labelsAddD";
  public fetchlabel = "getLabelsD";
  public changeDateTime = "changedatetime";
  public sociallogin ="socialLogin";
  public deletelabel = "labeldelete";
  public fetchlabelnote = "fetchlabelnotes";
  public noteimagesave = "noteimage";

  public addLabel = "labelAdd";
  public labelnamebyid = "labelNameid";

  public userimage = "userImage";
  public fetchuimage = "fetchUserImage";

  public emailCheck = "checkemail";
  public addCollabarator = "addCollabarator";
  public dragDropNotes = "drapDropNotes"
}
