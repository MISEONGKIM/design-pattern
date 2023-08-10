import { Directory } from "./Directory";
import { File } from "./File";
import { ListVisitor } from "./ListVisitor";

console.log("Making root entries...");

const rootdir = new Directory("root");
const bindir = new Directory("bin");
const tmpdir = new Directory("tmp");
const usrdir = new Directory("usr");
rootdir.add(bindir);
rootdir.add(tmpdir);
rootdir.add(usrdir);
bindir.add(new File("vi", 10000));
bindir.add(new File("latex", 20000));
rootdir.accept(new ListVisitor());

console.log("Making user entries...");
const Kim = new Directory("Kim");
const Lee = new Directory("Lee");
const Park = new Directory("Park");
usrdir.add(Kim);
usrdir.add(Lee);
usrdir.add(Park);
Kim.add(new File("diary.html", 100));
Kim.add(new File("Composite.java", 200));
Lee.add(new File("memo.tex", 300));
Park.add(new File("game.doc", 400));
Park.add(new File("junk.mail", 500));
rootdir.accept(new ListVisitor());
