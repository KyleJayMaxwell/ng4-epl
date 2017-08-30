import { Injectable } from '@angular/core';
import { TeamInfo } from './team-tile/team-tile.model';

@Injectable()
export class TeamService {
  constructor() { }

    public getEnglishStream(): TeamInfo[] {
      return this.getMockEnglishLeague();
    }

    private getMockEnglishLeague(): TeamInfo[] {
      return [
          { id: 1,
            name: 'Arsenal',
            yearFounded: 1886,
            stadium: 'Emirates Stadium',
            city: 'London',
            leagueTitles: 13,
            description: `Arsenal Football Club is a professional football club based in Highbury, London, England, that plays in the Premier League, the top flight of English football. The club has won 13 League titles, a record 13 FA Cups, two League Cups, the League Centenary Trophy, 15 FA Community Shields, one UEFA Cup Winners Cup and one Inter-Cities Fairs Cup. It has won more top flight matches than any English club except Liverpool, and has completed the only 38 match season unbeaten.
            Arsenal was the first club from the South of England to join The Football League, in 1893, and they reached the First Division in 1904. Relegated only once, in 1913, they continue the longest streak in the top division. In the 1930s, Arsenal won five League Championships and two FA Cups, and another FA Cup and two Championships after the war. In 1970–71, they won their first League and FA Cup Double. Between 1989 and 2005, they won five League titles and five FA Cups, including two more Doubles. They completed the 20th century with the highest average league position.
            Herbert Chapman won Arsenal's first national trophies, but died prematurely. He helped introduce the WM formation, floodlights, and shirt numbers, and added the white sleeves and brighter red to Arsenal's kit. Arsène Wenger has been the longest-serving manager and has won the most trophies. He has won a record 7 FA Cups, and his teams set English records for the longest win steak and longest unbeaten run.
            In 1886, Woolwich munitions workers founded the club as Dial Square. In 1913, the club crossed the city to Arsenal Stadium in Highbury. They became Tottenham Hotspur's nearest club, commencing the North London derby. In 2006, they moved down the road to the Emirates Stadium. Arsenal earned €435.5m in 2014–15, with the Emirates Stadium generating the highest revenue in world football. Based on social media activity from 2014–15, Arsenal's fanbase is the fifth largest in the world. In 2016, Forbes estimated the club was the second most valuable in England, worth $2.0 billion.`,
            crest: 'arsenal.png',
            abbreviation: 'ARS'
          },
          { id: 2,
            name: 'Manchester United',
            yearFounded: 1878,
            stadium: 'Old Trafford',
            city: 'Manchester',
            leagueTitles: 20,
            description: `Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England, that competes in the Premier League, the top flight of English football. Nicknamed "the Red Devils", the club was founded as Newton Heath LYR Football Club in 1878, changed its name to Manchester United in 1902 and moved to its current stadium, Old Trafford, in 1910.
            Manchester United have won a record 20 League titles, 12 FA Cups, 5 League Cups and a record 21 FA Community Shields. The club has also won three UEFA Champions Leagues, one UEFA Europa League, one UEFA Cup Winners' Cup, one UEFA Super Cup, one Intercontinental Cup and one FIFA Club World Cup. In 1998–99, the club became the first in the history of English football to achieve the treble of the Premier League, the FA Cup and the UEFA Champions League. In 2016–17, by winning the UEFA Europa League, they became one of five clubs to have won all three main UEFA club competitions. In addition, they became the only professional English club to have won every ongoing honour available to the first team and organised by a national or international football association.
            The 1958 Munich air disaster claimed the lives of eight players. In 1968, under the management of Matt Busby, Manchester United became the first English football club to win the European Cup. Alex Ferguson won 38 trophies as manager, including 13 Premier League titles, 5 FA Cups and 2 UEFA Champions Leagues, between 1986 and 2013, when he announced his retirement. José Mourinho is the club's current manager, having been appointed on 27 May 2016.
            Manchester United was the highest-earning football club in the world for 2015–16, with an annual revenue of €689 million, and the world's most valuable football club in 2017, valued at £2.86 billion. As of June 2015, it is the world's most valuable football brand, estimated to be worth $1.2 billion. After being floated on the London Stock Exchange in 1991, the club was purchased by Malcolm Glazer in May 2005 in a deal valuing the club at almost £800 million, after which the company was taken private again, before going public once more in August 2012, when they made an initial public offering on the New York Stock Exchange. Manchester United is one of the most widely supported football clubs in the world, and has its strongest rivalries with Liverpool, Manchester City and Leeds United.`,
            crest: 'manu.png',
            abbreviation: 'MUN'
          },
          { id: 3,
            name: 'Manchester City',
            yearFounded: 1880,
            stadium: 'City of Manchester Stadium (Eithad Stadium)',
            city: 'Manchester',
            leagueTitles: 4,
            description: `Manchester City Football Club is a football club in Manchester, England. Founded in 1880 as St. Mark's (West Gorton), they became Ardwick Association Football Club in 1887 and Manchester City in 1894. The club moved to the City of Manchester Stadium in 2003, having played at Maine Road since 1923.
            The club's most successful period was in the late 1960s and early 1970s, when they won the League Championship, FA Cup, League Cup and European Cup Winners' Cup under the management team of Joe Mercer and Malcolm Allison. After losing the 1981 FA Cup Final, the club went through a period of decline, culminating in relegation to the third tier of English football for the only time in their history in 1998. Having regained their Premier League status in the early 2000s, the club was purchased in 2008 by Abu Dhabi United Group and has since become one of the wealthiest in the world. Since 2011, the club have won five major honours, including the Premier League in 2012 and 2014.
            By 2015–16, Manchester City had the fifth-highest revenue in the footballing world with an annual revenue of €524.9 million. In 2017, Forbes magazine estimated they were the world's fifth-most valuable football club, worth US$2.08 billion.`,
            crest: 'mancity.png',
            abbreviation: 'MCI'
          },
          { id: 4,
            name: 'Chelsea',
            yearFounded: 1905,
            stadium: 'Stamford Bridge',
            city: 'London',
            leagueTitles: 6,
            description: `Chelsea Football Club (/ˈtʃɛlsiː/) is a professional football club based in Fulham, London, England that competes in the Premier League, of which they are reigning champions. Founded in 1905, the club's home ground since then has been Stamford Bridge.
            Chelsea had their first major success in 1955, when they won the English league championship. They then won various cup competitions between 1965 and 1971. The club's greatest period of success has come during the last two decades; winning 21 trophies since 1997. Chelsea have won six national league titles, seven FA Cups, five League Cups and four FA Community Shields, one UEFA Champions League, two UEFA Cup Winners' Cups, one UEFA Europa League and one UEFA Super Cup. Chelsea are the only London club to win the UEFA Champions League, and one of five clubs and the first British club, to have won all three of UEFA's major club competitions.
            Chelsea's regular kit colours are royal blue shirts and shorts with white socks. The club's crest has been changed several times in attempts to re-brand the club and modernise its image. The current crest, featuring a ceremonial lion rampant regardant holding a staff, is a modification of the one introduced in the early 1950s. The club have the sixth-highest average all-time attendance in English football. Their average home gate for the 2016–17 season was 41,507, the sixth highest in the Premier League. Since 2003, Chelsea have been owned by Russian billionaire Roman Abramovich. In 2016, they were ranked by Forbes magazine as the seventh most valuable football club in the world, at £1.15 billion `,
            crest: 'chelsea.png',
            abbreviation: 'CHE'
          },
          { id: 5,
            name: 'West Ham United',
            yearFounded: 1895,
            stadium: 'London Stadium',
            city: 'London',
            leagueTitles: 0,
            description: `West Ham United Football Club is a professional football club based in Stratford, East London, England. They compete in the Premier League, the top tier of English football. The club re-located to the London Stadium in 2016.
            The club was founded in 1895 as Thames Ironworks and reformed in 1900 as West Ham United. They moved to the Boleyn Ground in 1904, which remained their home ground for more than a century. The team initially competed in the Southern League and Western League before joining the Football League in 1919. They were promoted to the top flight in 1923, when they were also losing finalists in the first FA Cup Final held at Wembley. In 1940, the club won the inaugural Football League War Cup.
            West Ham have been winners of the FA Cup three times, in 1964, 1975, and 1980, and have also been runners-up twice, in 1923, and 2006. The club have reached two major European finals, winning the European Cup Winners' Cup in 1965 and finishing runners-up in the same competition in 1976. West Ham also won the Intertoto Cup in 1999. They are one of eight clubs never to have fallen below the second tier of English football, spending 59 of 91 league seasons in the top flight, up to and including the 2016–17 season. The club's highest league position to date came in 1985–86 when they achieved third place in the then First Division.
            Three West Ham players were members of the 1966 World Cup final-winning England team: captain Bobby Moore and goalscorers Geoff Hurst and Martin Peters.`,
            crest: 'westham.png',
            abbreviation: 'WHU'
          },
          { id: 6,
            name: 'Liverpool',
            yearFounded: 1892,
            stadium: '	Anfield',
            city: 'Liverpool',
            leagueTitles: 18,
            description: `Liverpool Football Club (/ˈlɪvərpuːl/) is a professional association football club based in Liverpool, Merseyside, England. They compete in the Premier League, the top tier of English football. The club has won 5 European Cups, 3 UEFA Cups, 3 UEFA Super Cups, 18 League titles, 7 FA Cups, a record 8 League Cups, and 15 FA Community Shields.
            The club was founded in 1892 and joined the Football League the following year. The club has played at Anfield since its formation. Liverpool established itself as a major force in both English and European football during the 1970s and 1980s when Bill Shankly and Bob Paisley led the club to 11 League titles and seven European trophies. Under the management of Rafa Benítez and captained by Steven Gerrard Liverpool became European champion for the fifth time, winning the 2005 UEFA Champions League Final against Milan in spite of being 3–0 down at half time.
            Liverpool was the ninth highest-earning football club in the world for 2014–15, with an annual revenue of €391 million, and the world's eighth most valuable football club in 2016, valued at $1.55 billion. The club holds many long-standing rivalries, most notably the North West Derby against Manchester United and the Merseyside derby with Everton.
            The club's supporters have been involved in two major tragedies. The first was the Heysel Stadium disaster in 1985, where escaping fans were pressed against a collapsing wall in the Heysel Stadium, with 39 people—mostly Italians and Juventus fans—dying, after which English clubs were given a five-year ban from European competition. The second was the Hillsborough disaster in 1989, where 96 Liverpool supporters died in a crush against perimeter fencing.
            The team changed from red shirts and white shorts to an all-red home strip in 1964 which has been used ever since. The club's anthem is "You'll Never Walk Alone".`,
            crest: 'liverpool.png',
            abbreviation: 'LIV'
          }
      ];
  }
}
