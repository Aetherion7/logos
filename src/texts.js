/* Texts. Each sentence: [ "greek/gloss greek/gloss …", "English" ]. Underscore = space inside a gloss.
   Greek originals are public domain. English translations and glosses were written for this app. */
const RAW=[
{id:"apology",en:"The Apology of Socrates",img:"plato",author:"Πλάτων",name:"Plato",title:"Ἀπολογία Σωκράτους",sub:"The Apology of Socrates · complete",pages:[
 {ref:"17a",s:[
  ["Ὅτι/how μὲν/indeed ὑμεῖς,/you_(pl.) ὦ/O ἄνδρες/men Ἀθηναῖοι,/of_Athens πεπόνθατε/you_have_been_affected ὑπὸ/by τῶν/the ἐμῶν/my κατηγόρων,/accusers οὐκ/not οἶδα·/I_know","How you, men of Athens, have been affected by my accusers, I do not know."],
  ["ἐγὼ/I δ᾽/but οὖν/at_any_rate καὶ/even αὐτὸς/myself ὑπ᾽/by αὐτῶν/them ὀλίγου/almost ἐμαυτοῦ/myself ἐπελαθόμην,/I_forgot οὕτω/so πιθανῶς/persuasively ἔλεγον./they_spoke","I myself, at any rate, almost forgot who I was because of them, so persuasively did they speak."],
  ["καίτοι/and_yet ἀληθές/true γε/at_least ὡς/so ἔπος/word εἰπεῖν/to_say οὐδὲν/nothing εἰρήκασιν./they_have_said","And yet, so to speak, they have said nothing true."]]},
 {ref:"17a–b",s:[
  ["μάλιστα/most δὲ/and αὐτῶν/of_them ἓν/one_thing ἐθαύμασα/I_wondered_at τῶν/of_the πολλῶν/many ὧν/which ἐψεύσαντο,/they_lied","Of their many lies, one astonished me most:"],
  ["τοῦτο/this ἐν/in ᾧ/which ἔλεγον/they_said ὡς/that χρῆν/it_was_necessary ὑμᾶς/you εὐλαβεῖσθαι/to_beware μὴ/lest ὑπ᾽/by ἐμοῦ/me ἐξαπατηθῆτε/you_be_deceived ὡς/as δεινοῦ/clever ὄντος/being λέγειν./at_speaking","when they said you must take care not to be deceived by me, since I am a clever speaker."],
  ["τὸ/the γὰρ/for μὴ/not αἰσχυνθῆναι/to_be_ashamed ὅτι/that αὐτίκα/at_once ὑπ᾽/by ἐμοῦ/me ἐξελεγχθήσονται/they_will_be_refuted ἔργῳ,/in_fact","For not to be ashamed that they will at once be refuted by me in fact,"],
  ["ἐπειδὰν/when μηδ᾽/not_even ὁπωστιοῦν/in_any_way φαίνωμαι/I_appear δεινὸς/clever λέγειν,/at_speaking τοῦτό/this μοι/to_me ἔδοξεν/seemed αὐτῶν/of_them ἀναισχυντότατον/most_shameless εἶναι,/to_be","when I prove not clever at speaking in any way, this seemed to me the most shameless thing of all,"]]},
 {ref:"17b",s:[
  ["εἰ/if μὴ/not ἄρα/perhaps δεινὸν/clever καλοῦσιν/they_call οὗτοι/these_men λέγειν/at_speaking τὸν/the_one τἀληθῆ/the_truth λέγοντα·/speaking","unless by a clever speaker they mean the one who speaks the truth;"],
  ["εἰ/if μὲν/indeed γὰρ/for τοῦτο/this λέγουσιν,/they_mean ὁμολογοίην/I_would_agree ἂν/(would) ἔγωγε/I_for_my_part οὐ/not κατὰ/after_the_manner_of τούτους/these εἶναι/to_be ῥήτωρ./an_orator","if that is what they mean, I would agree that I am an orator, though not of their kind."],
  ["οὗτοι/these μὲν/indeed οὖν,/then ὥσπερ/just_as ἐγὼ/I λέγω,/say ἤ/either τι/something ἢ/or οὐδὲν/nothing ἀληθὲς/true εἰρήκασιν,/have_said","These men, as I say, have said little or nothing true,"],
  ["ὑμεῖς/you δέ/but μου/from_me ἀκούσεσθε/will_hear πᾶσαν/all τὴν/the ἀλήθειαν./truth","but from me you will hear the whole truth."]]},
 {ref:"21d",s:[
  ["τούτου/this μὲν/indeed τοῦ/the ἀνθρώπου/man ἐγὼ/I σοφώτερός/wiser εἰμι·/am","I am wiser than this man;"],
  ["κινδυνεύει/it_is_likely μὲν/indeed γὰρ/for ἡμῶν/of_us οὐδέτερος/neither οὐδὲν/nothing καλὸν/fine κἀγαθὸν/and_good εἰδέναι,/to_know","for it is likely that neither of us knows anything fine and good,"],
  ["ἀλλ᾽/but οὗτος/this_man μὲν/on_the_one_hand οἴεταί/thinks τι/something εἰδέναι/to_know οὐκ/not εἰδώς,/knowing","but he thinks he knows something although he does not,"],
  ["ἐγὼ/I δέ,/but ὥσπερ/just_as οὖν/then οὐκ/not οἶδα,/I_know οὐδὲ/not_even οἴομαι·/I_think","whereas I, just as I do not know, do not think I know either."]]},
 {ref:"21d",s:[
  ["ἔοικα/I_seem γοῦν/at_any_rate τούτου/than_him γε/at_least σμικρῷ/small τινι/by_some αὐτῷ/very τούτῳ/this σοφώτερος/wiser εἶναι,/to_be","I seem, then, to be wiser than he in just this one small thing:"],
  ["ὅτι/that ἃ/what μὴ/not οἶδα/I_know οὐδὲ/not_even οἴομαι/I_think εἰδέναι./to_know","that what I do not know, I do not think I know."]]},
 {ref:"38a",s:[
  ["ἐάν/if τ᾽/and αὖ/again λέγω/I_say ὅτι/that καὶ/also τυγχάνει/happens μέγιστον/greatest ἀγαθὸν/good ὂν/being ἀνθρώπῳ/for_a_human τοῦτο,/this","And if I say that this is in fact the greatest good for a human being,"],
  ["ἑκάστης/each ἡμέρας/day περὶ/about ἀρετῆς/virtue τοὺς/the λόγους/discussions ποιεῖσθαι/to_hold","to discuss virtue every day,"],
  ["καὶ/and τῶν/the ἄλλων/other_things περὶ/about ὧν/which ὑμεῖς/you ἐμοῦ/me ἀκούετε/hear διαλεγομένου/conversing καὶ/both ἐμαυτὸν/myself καὶ/and ἄλλους/others ἐξετάζοντος,/examining","and the other things you hear me talking about as I examine myself and others,"],
  ["ὁ/the δὲ/and ἀνεξέταστος/unexamined βίος/life οὐ/not βιωτὸς/worth_living ἀνθρώπῳ,/for_a_human","and that the unexamined life is not worth living for a human being,"],
  ["ταῦτα/these_things δ᾽/but ἔτι/still ἧττον/less πείσεσθέ/you_will_believe μοι/me λέγοντι./saying","you will believe me even less."]]},
 {ref:"42a",s:[
  ["ἀλλὰ/but γὰρ/indeed ἤδη/already ὥρα/hour ἀπιέναι,/to_go_away ἐμοὶ/for_me μὲν/on_one_hand ἀποθανουμένῳ,/about_to_die ὑμῖν/for_you δὲ/on_the_other βιωσομένοις·/about_to_live","But now it is time to go away, I to die, you to live."],
  ["ὁπότεροι/which_of_the_two δὲ/and ἡμῶν/of_us ἔρχονται/go ἐπὶ/to ἄμεινον/better πρᾶγμα,/thing","Which of us goes to the better thing"],
  ["ἄδηλον/unclear παντὶ/to_everyone πλὴν/except ἢ/than τῷ/the θεῷ./god","is unclear to everyone except the god."]]}]},

{id:"herodotus",en:"Histories",img:"herodotus",author:"Ἡρόδοτος",name:"Herodotus",title:"Ἱστορίαι",sub:"Histories · Proem and Solon",pages:[
 {ref:"1.0",s:[
  ["Ἡροδότου/of_Herodotus Ἁλικαρνησσέος/of_Halicarnassus ἱστορίης/of_inquiry ἀπόδεξις/presentation ἥδε,/this_here","This is the presentation of the inquiry of Herodotus of Halicarnassus,"],
  ["ὡς/so_that μήτε/neither τὰ/the γενόμενα/things_that_happened ἐξ/from ἀνθρώπων/men τῷ/by_the χρόνῳ/time ἐξίτηλα/faded γένηται,/may_become","so that the things done by men may not fade with time,"],
  ["μήτε/nor ἔργα/deeds μεγάλα/great τε/both καὶ/and θωμαστά,/marvellous","nor great and marvellous deeds,"],
  ["τὰ/some μὲν/on_one_hand Ἕλλησι,/by_Greeks τὰ/others δὲ/on_the_other βαρβάροισι/by_barbarians ἀποδεχθέντα,/displayed","some displayed by Greeks, some by barbarians,"],
  ["ἀκλεᾶ/without_fame γένηται,/may_become","become without fame,"],
  ["τά/the τε/both ἄλλα/other_things καὶ/and δι᾽/because_of ἣν/which αἰτίην/cause ἐπολέμησαν/they_made_war ἀλλήλοισι./on_one_another","both in other respects and above all the reason why they made war on one another."]]},
 {ref:"1.32",s:[
  ["ὦ/O Κροῖσε,/Croesus ἐπιστάμενόν/knowing με/me τὸ/the θεῖον/divine πᾶν/wholly ἐὸν/being φθονερόν/jealous τε/both καὶ/and ταραχῶδες/troublesome","Croesus, you ask me, who knows that the divine is wholly jealous and troublesome,"],
  ["ἐπειρωτᾷς/you_ask ἀνθρωπηίων/human πρηγμάτων/affairs πέρι./about","about human affairs."],
  ["οὕτω/thus ὦν,/then Κροῖσε,/Croesus πᾶν/wholly ἐστὶ/is ἄνθρωπος/man συμφορή./chance","So then, Croesus, man is entirely a thing of chance."]]},
 {ref:"1.32",s:[
  ["πρὶν/before δ᾽/but ἂν/(ever) τελευτήσῃ,/he_dies ἐπισχεῖν,/to_hold_back","But before he dies, hold back,"],
  ["μηδὲ/and_not καλέειν/to_call κω/yet ὄλβιον/blessed ἀλλ᾽/but εὐτυχέα./fortunate","and do not yet call him blessed, only fortunate."],
  ["σκοπέειν/to_look_at δὲ/and χρὴ/one_must παντὸς/of_every χρήματος/matter τὴν/the τελευτὴν/end κῇ/how ἀποβήσεται·/it_will_turn_out","One must look to the end of every matter, how it will turn out;"],
  ["πολλοῖσι/to_many γὰρ/for δὴ/indeed ὑποδέξας/having_shown ὄλβον/happiness ὁ/the θεὸς/god προρρίζους/root_and_branch ἀνέτρεψε./overturned","for to many the god has shown a glimpse of happiness, then overturned them root and branch."]]}]},

{id:"heraclitus",en:"Fragments",img:"heraclitus",author:"Ἡράκλειτος",name:"Heraclitus",title:"Ἀποσπάσματα",sub:"Fragments · complete (Diels–Kranz B)",pages:[
 {ref:"B 1 · B 50",s:[
  ["τοῦ/the δὲ/but λόγου/logos τοῦδ᾽/this ἐόντος/being ἀεὶ/always ἀξύνετοι/without_understanding γίγνονται/become ἄνθρωποι/humans","Though this logos holds always, humans fail to understand it."],
  ["οὐκ/not ἐμοῦ,/me ἀλλὰ/but τοῦ/the λόγου/logos ἀκούσαντας/having_listened ὁμολογεῖν/to_agree σοφόν/wise ἐστιν/it_is ἓν/one πάντα/all_things εἶναι./to_be","Listening not to me but to the logos, it is wise to agree that all things are one."]]},
 {ref:"B 30",s:[
  ["κόσμον/world_order τόνδε,/this τὸν/the αὐτὸν/same ἁπάντων,/for_all","This world order, the same for all,"],
  ["οὔτε/neither τις/any θεῶν/of_gods οὔτε/nor ἀνθρώπων/of_humans ἐποίησεν,/made","no god and no human made,"],
  ["ἀλλ᾽/but ἦν/it_was ἀεὶ/always καὶ/and ἔστιν/is καὶ/and ἔσται/will_be πῦρ/fire ἀείζωον,/ever-living","but it always was and is and will be: ever-living fire,"],
  ["ἁπτόμενον/kindling μέτρα/in_measures καὶ/and ἀποσβεννύμενον/going_out μέτρα./in_measures","kindling in measures and going out in measures."]]},
 {ref:"B 49a · B 91",s:[
  ["ποταμοῖς/into_rivers τοῖς/the αὐτοῖς/same ἐμβαίνομέν/we_step τε/both καὶ/and οὐκ/not ἐμβαίνομεν,/we_step","Into the same rivers we step and do not step,"],
  ["εἶμέν/we_are τε/both καὶ/and οὐκ/not εἶμεν./we_are","we are and are not."],
  ["ποταμῷ/into_a_river γὰρ/for οὐκ/not ἔστιν/it_is_possible ἐμβῆναι/to_step δὶς/twice τῷ/the αὐτῷ./same","For it is not possible to step twice into the same river."]]},
 {ref:"B 53 · B 60",s:[
  ["πόλεμος/war πάντων/of_all μὲν/indeed πατήρ/father ἐστι,/is πάντων/of_all δὲ/and βασιλεύς,/king","War is father of all and king of all;"],
  ["καὶ/and τοὺς/some μὲν/on_one_hand θεοὺς/gods ἔδειξε/it_showed τοὺς/others δὲ/on_the_other ἀνθρώπους,/humans","some it has shown to be gods, others humans,"],
  ["τοὺς/some μὲν/on_one_hand δούλους/slaves ἐποίησε/it_made τοὺς/others δὲ/on_the_other ἐλευθέρους./free","some it has made slaves, others free."],
  ["ὁδὸς/road ἄνω/up κάτω/down μία/one καὶ/and ὡυτή./the_same","The road up and down is one and the same."]]},
 {ref:"B 45 · B 101 · B 119 · B 123",s:[
  ["ψυχῆς/of_the_soul πείρατα/limits ἰὼν/going οὐκ/not ἂν/(would) ἐξεύροιο,/you_find πᾶσαν/every ἐπιπορευόμενος/travelling ὁδόν·/road","You would not find the limits of the soul by going, though you travelled every road;"],
  ["οὕτω/so βαθὺν/deep λόγον/logos ἔχει./it_has","so deep a logos does it have."],
  ["ἐδιζησάμην/I_searched ἐμεωυτόν./myself","I searched myself."],
  ["ἦθος/character ἀνθρώπῳ/for_a_human δαίμων./divine_fate","Character is a human being's fate."],
  ["φύσις/nature κρύπτεσθαι/to_hide φιλεῖ./loves","Nature loves to hide."]]}]},

{id:"aristotle",en:"On Knowing, the City and Happiness",img:"aristotle",author:"Ἀριστοτέλης",name:"Aristotle",title:"Ἐκλογαί",sub:"Metaphysics · Politics · Ethics",pages:[
 {ref:"Met. 980a",s:[
  ["Πάντες/all ἄνθρωποι/humans τοῦ/the εἰδέναι/to_know ὀρέγονται/desire φύσει./by_nature","All human beings by nature desire to know."],
  ["σημεῖον/sign δ᾽/and ἡ/the τῶν/of_the αἰσθήσεων/senses ἀγάπησις·/delight","A sign of this is the delight we take in our senses;"],
  ["καὶ/even γὰρ/for χωρὶς/apart_from τῆς/the χρείας/usefulness ἀγαπῶνται/they_are_loved δι᾽/for_the_sake_of αὑτάς,/themselves","for even apart from their usefulness they are loved for themselves,"],
  ["καὶ/and μάλιστα/most τῶν/of_the ἄλλων/others ἡ/the_one διὰ/through τῶν/the ὀμμάτων./eyes","and above all the others the sense of sight."]]},
 {ref:"Met. 980a",s:[
  ["οὐ/not γὰρ/for μόνον/only ἵνα/in_order_that πράττωμεν/we_may_act","For not only in order to act,"],
  ["ἀλλὰ/but καὶ/also μηθὲν/nothing μέλλοντες/intending πράττειν/to_do τὸ/the ὁρᾶν/seeing αἱρούμεθα/we_choose","but even when we intend to do nothing, we prefer seeing"],
  ["ἀντὶ/over πάντων/all ὡς/so εἰπεῖν/to_say τῶν/the ἄλλων./others","to practically everything else."],
  ["αἴτιον/cause δ᾽/and ὅτι/that μάλιστα/most ποιεῖ/makes γνωρίζειν/to_know ἡμᾶς/us αὕτη/this τῶν/of_the αἰσθήσεων/senses","The reason is that of all the senses this one most makes us know"],
  ["καὶ/and πολλὰς/many δηλοῖ/reveals διαφοράς./differences","and reveals many differences."]]},
 {ref:"Pol. 1253a",s:[
  ["ἐκ/from τούτων/these οὖν/therefore φανερὸν/clear ὅτι/that τῶν/of_the_things φύσει/by_nature ἡ/the πόλις/city ἐστί,/is","From this it is clear that the city exists by nature,"],
  ["καὶ/and ὅτι/that ὁ/the ἄνθρωπος/human φύσει/by_nature πολιτικὸν/political ζῷον./animal","and that the human being is by nature a political animal."]]},
 {ref:"EN 1098a",s:[
  ["ἔτι/further δ᾽/and ἐν/in βίῳ/life τελείῳ./complete","And further, in a complete life."],
  ["μία/one γὰρ/for χελιδὼν/swallow ἔαρ/spring οὐ/not ποιεῖ,/makes οὐδὲ/nor μία/one ἡμέρα·/day","For one swallow does not make a spring, nor does one day;"],
  ["οὕτω/so δὲ/and οὐδὲ/not_even μακάριον/blessed καὶ/and εὐδαίμονα/happy μία/one ἡμέρα/day οὐδ᾽/nor ὀλίγος/short χρόνος./time","so too one day or a short time does not make a person blessed and happy."]]}]},

{id:"epicurus",en:"Letter to Menoeceus",img:"epicurus",author:"Ἐπίκουρος",name:"Epicurus",title:"Ἐπιστολὴ πρὸς Μενοικέα",sub:"Letter to Menoeceus · complete",pages:[]},
{id:"marcus",en:"Meditations",img:"marcus",author:"Μάρκος Αὐρήλιος",name:"Marcus Aurelius",title:"Τὰ εἰς ἑαυτόν",sub:"Meditations · Book II, 1",pages:[
 {ref:"II 1",s:[
  ["Ἕωθεν/at_dawn προλέγειν/to_say_beforehand ἑαυτῷ·/to_oneself","At dawn, say to yourself in advance:"],
  ["συντεύξομαι/I_will_meet περιέργῳ,/a_busybody ἀχαρίστῳ,/an_ungrateful_one ὑβριστῇ,/an_insolent_one δολερῷ,/a_deceitful_one βασκάνῳ,/an_envious_one ἀκοινωνήτῳ·/an_unsociable_one","I shall meet a busybody, an ingrate, an insolent man, a liar, an envious man, an unsociable one."],
  ["πάντα/all ταῦτα/these_things συμβέβηκεν/have_befallen ἐκείνοις/them παρὰ/because_of τὴν/the ἄγνοιαν/ignorance τῶν/of_the ἀγαθῶν/good_things καὶ/and κακῶν./bad_things","All this has come upon them through ignorance of what is good and bad."]]},
 {ref:"II 1",s:[
  ["ἐγὼ/I δὲ/but τεθεωρηκὼς/having_seen τὴν/the φύσιν/nature τοῦ/of_the ἀγαθοῦ/good ὅτι/that καλόν,/beautiful","But I, who have seen the nature of the good, that it is beautiful,"],
  ["καὶ/and τοῦ/of_the κακοῦ/bad ὅτι/that αἰσχρόν,/shameful","and of the bad, that it is shameful,"],
  ["καὶ/and τὴν/the αὐτοῦ/very τοῦ/of_the ἁμαρτάνοντος/wrongdoer φύσιν/nature ὅτι/that μοι/to_me συγγενής,/akin","and the nature of the wrongdoer himself, that he is akin to me,"],
  ["οὐχὶ/not αἵματος/of_blood ἢ/or σπέρματος/of_seed τοῦ/the αὐτοῦ,/same","not of the same blood or seed,"],
  ["ἀλλὰ/but νοῦ/in_mind καὶ/and θείας/divine ἀπομοίρας/portion μέτοχος,/sharing","but sharing in mind and a portion of the divine,"]]},
 {ref:"II 1",s:[
  ["οὔτε/neither βλαβῆναι/to_be_harmed ὑπό/by τινος/any αὐτῶν/of_them δύναμαι·/I_can","I cannot be harmed by any of them,"],
  ["αἰσχρῷ/in_shame γάρ/for με/me οὐδεὶς/no_one περιβαλεῖ·/will_wrap","for no one will involve me in what is shameful;"],
  ["οὔτε/nor ὀργίζεσθαι/to_be_angry τῷ/with_the συγγενεῖ/kinsman δύναμαι/I_can οὔτε/nor ἀπέχθεσθαι/to_hate αὐτῷ./him","nor can I be angry with my kinsman or hate him."]]},
 {ref:"II 1",s:[
  ["γεγόναμεν/we_were_born γὰρ/for πρὸς/for συνεργίαν/working_together ὡς/like πόδες,/feet ὡς/like χεῖρες,/hands ὡς/like βλέφαρα,/eyelids","For we were made to work together, like feet, like hands, like eyelids,"],
  ["ὡς/like οἱ/the στοῖχοι/rows τῶν/of_the ἄνω/upper καὶ/and κάτω/lower ὀδόντων./teeth","like the rows of upper and lower teeth."],
  ["τὸ/the οὖν/therefore ἀντιπράσσειν/working_against ἀλλήλοις/one_another παρὰ/against φύσιν·/nature","To work against one another is therefore against nature;"],
  ["ἀντιπρακτικὸν/working_against δὲ/and τὸ/the ἀγανακτεῖν/being_vexed καὶ/and ἀποστρέφεσθαι./turning_away","and to be vexed and turn away is to work against."]]}]}
];
const TEXTS=RAW.map(t=>({...t,pages:t.pages.map(pg=>({ref:pg.ref,s:pg.s.map(([toks,e])=>{
  const g=[],w=[];toks.trim().split(/\s+/).forEach(x=>{const i=x.lastIndexOf("/");g.push(x.slice(0,i));w.push(x.slice(i+1).replace(/_/g," "))});
  return {g:g.join(" "),e,w}})}))}));

/* Complete texts (Apology, Heraclitus) replace the short excerpts above */
const FULL=/*FULL*/;
TEXTS.forEach(t=>{if(FULL[t.id])t.pages=FULL[t.id]});
for(let i=TEXTS.length-1;i>=0;i--)if(!FULL[TEXTS[i].id])TEXTS.splice(i,1);
