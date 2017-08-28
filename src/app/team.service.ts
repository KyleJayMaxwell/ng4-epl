import { Injectable } from '@angular/core';
import { TeamInfo } from './team-tile/team-tile.model';

@Injectable()
export class TeamService {
  constructor() { }

    public getMockEnglishLeague(): TeamInfo[] {
      return [
          { id: 1,
            name: 'Arsenal FC',
            yearFounded: 1886,
            stadium: 'Emirates Stadium',
            city: 'London',
            leagueTitles: 13,
            description: `Arsenal Football Club is a professional football club based in Highbury, London, England, that plays in the Premier League, the top flight of English football. The club has won 13 League titles, a record 13 FA Cups, two League Cups, the League Centenary Trophy, 15 FA Community Shields, one UEFA Cup Winners Cup and one Inter-Cities Fairs Cup. It has won more top flight matches than any English club except Liverpool, and has completed the only 38 match season unbeaten.
            Arsenal was the first club from the South of England to join The Football League, in 1893, and they reached the First Division in 1904. Relegated only once, in 1913, they continue the longest streak in the top division. In the 1930s, Arsenal won five League Championships and two FA Cups, and another FA Cup and two Championships after the war. In 1970–71, they won their first League and FA Cup Double. Between 1989 and 2005, they won five League titles and five FA Cups, including two more Doubles. They completed the 20th century with the highest average league position.
            Herbert Chapman won Arsenal's first national trophies, but died prematurely. He helped introduce the WM formation, floodlights, and shirt numbers, and added the white sleeves and brighter red to Arsenal's kit. Arsène Wenger has been the longest-serving manager and has won the most trophies. He has won a record 7 FA Cups, and his teams set English records for the longest win steak and longest unbeaten run.
            In 1886, Woolwich munitions workers founded the club as Dial Square. In 1913, the club crossed the city to Arsenal Stadium in Highbury. They became Tottenham Hotspur's nearest club, commencing the North London derby. In 2006, they moved down the road to the Emirates Stadium. Arsenal earned €435.5m in 2014–15, with the Emirates Stadium generating the highest revenue in world football. Based on social media activity from 2014–15, Arsenal's fanbase is the fifth largest in the world. In 2016, Forbes estimated the club was the second most valuable in England, worth $2.0 billion.`,
            crest: 'arsenal.jpg'
          },
          { id: 2,
            name: 'Manchester United F.C.',
            yearFounded: 1878,
            stadium: 'Old Trafford',
            city: 'Manchester',
            leagueTitles: 20,
            description: `Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England, that competes in the Premier League, the top flight of English football. Nicknamed "the Red Devils", the club was founded as Newton Heath LYR Football Club in 1878, changed its name to Manchester United in 1902 and moved to its current stadium, Old Trafford, in 1910.
            Manchester United have won a record 20 League titles, 12 FA Cups, 5 League Cups and a record 21 FA Community Shields. The club has also won three UEFA Champions Leagues, one UEFA Europa League, one UEFA Cup Winners' Cup, one UEFA Super Cup, one Intercontinental Cup and one FIFA Club World Cup. In 1998–99, the club became the first in the history of English football to achieve the treble of the Premier League, the FA Cup and the UEFA Champions League. In 2016–17, by winning the UEFA Europa League, they became one of five clubs to have won all three main UEFA club competitions. In addition, they became the only professional English club to have won every ongoing honour available to the first team and organised by a national or international football association.
            The 1958 Munich air disaster claimed the lives of eight players. In 1968, under the management of Matt Busby, Manchester United became the first English football club to win the European Cup. Alex Ferguson won 38 trophies as manager, including 13 Premier League titles, 5 FA Cups and 2 UEFA Champions Leagues, between 1986 and 2013, when he announced his retirement. José Mourinho is the club's current manager, having been appointed on 27 May 2016.
            Manchester United was the highest-earning football club in the world for 2015–16, with an annual revenue of €689 million, and the world's most valuable football club in 2017, valued at £2.86 billion. As of June 2015, it is the world's most valuable football brand, estimated to be worth $1.2 billion. After being floated on the London Stock Exchange in 1991, the club was purchased by Malcolm Glazer in May 2005 in a deal valuing the club at almost £800 million, after which the company was taken private again, before going public once more in August 2012, when they made an initial public offering on the New York Stock Exchange. Manchester United is one of the most widely supported football clubs in the world, and has its strongest rivalries with Liverpool, Manchester City and Leeds United.`,
            crest: 'manu.jpg'
          }
      ];
  }
}
